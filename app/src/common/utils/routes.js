/* global System */

import angular from 'angular';

import { RoutesConfigurator } from 'common/utils/RoutesConfigurator';

export let lazyLoadStateFactory = (futureState, $ocLazyLoad) => {
    return System.import(futureState.module).then((loaded) => {
        let ModuleConfig = loaded[Object.keys(loaded)[1]];
        $ocLazyLoad.load(loaded.module);
        let config = angular.copy(futureState);
        config.component = ModuleConfig.component;
        config.name = config.stateName;
        delete config.stateName;
        config.path = config.url;
        delete config.url;
        delete config.type;
        return RoutesConfigurator.transformStateDefinition(config, true);
    });
};
lazyLoadStateFactory.$inject = ['futureState', '$ocLazyLoad'];


export let lazyLoadConfig = ($futureStateProvider, $httpProvider) => {
    $httpProvider.useApplyAsync(true);
    $futureStateProvider.stateFactory('lazy', lazyLoadStateFactory);
};
lazyLoadConfig.$inject = ['$futureStateProvider', '$httpProvider'];

export let generateRoutesConfigurations = (routes, isMain = false) => {

    let states = [],
        futureStates = [],
        defaultStateUrl = '';

    routes.forEach((config) => {
        if (!!config.path && !angular.isString(config.path)) {
            throw new Error(`incorrect route configuration ${config}`);
        }
        if (isMain === true) {
            if (!defaultStateUrl) {
                defaultStateUrl = config.path;
            } else if (config.useAsDefault) {
                defaultStateUrl = config.path;
            }
        }
        if (config.useAsDefault) {
            defaultStateUrl = config.path;
        }
        if (config.lazy === true && angular.isString(config.module)) {
            if (!angular.isString(config.name)) {
                throw new Error(`incorrect route configuration ${config}`);
            }

            let futureState = config;
            futureState.stateName = futureState.name;
            delete futureState.name;
            futureState.url = futureState.path;
            delete futureState.path;
            futureState.type = 'lazy';

            futureStates.push(futureState);
        } else {
            states.push(RoutesConfigurator.transformStateDefinition(config));
        }
    });

    let configurators = {
        states: RoutesConfigurator.generateStateConfig(states),
        futureStates: RoutesConfigurator.generateFutureStateConfig(futureStates)
    };

    if(isMain) {
        configurators.default = RoutesConfigurator.generateDefaultStateConfig(defaultStateUrl);
    }

    return configurators;

};
