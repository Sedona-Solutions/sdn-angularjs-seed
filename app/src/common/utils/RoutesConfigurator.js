import angular from 'angular';

export class RoutesConfigurator {

    static generateStateConfig(params) {
        let stateConfig = ($stateProvider) => {
            params.forEach((definition) => {
                $stateProvider.state(definition.name, definition.config);
            });
        };
        stateConfig.$inject = ['$stateProvider'];

        return stateConfig;
    }

    static generateFutureStateConfig(params) {
        let futureStateConfig = ($futureStateProvider) => {
            params.forEach((definition) => {
                $futureStateProvider.futureState(definition);
            });
        };
        futureStateConfig.$inject = ['$futureStateProvider'];
        return futureStateConfig;
    }

    static generateDefaultStateConfig(defaultStateUrl) {
        let defaultStateConfig = ($urlRouterProvider) => {
            $urlRouterProvider.otherwise(defaultStateUrl);
        };
        defaultStateConfig.$inject = ['$urlRouterProvider'];

        return defaultStateConfig;
    }

    static transformStateDefinition(config, merge = false) {
        let paramObj = {
            name: config.name || config.component.$$name,
            config: {
                url: config.path,
                template: config.template || `
                <${config.component.$$config.selector}>
                </${config.component.$$config.selector}>
            `
            }
        };

        if (config.parent) {
            paramObj.config.parent = config.parent;
        }

        if (angular.isDefined(config.abstract)) {
            paramObj.config.abstract = !!config.abstract;
        }

        if (config.data) {
            paramObj.config.data = config.data;
        }

        if (config.resolve) {
            paramObj.config.resolve = config.resolve;
        }

        let mergedObj = paramObj.config;
        mergedObj.name = paramObj.name;
        return merge ? mergedObj : paramObj;
    }
}
