import 'babel/external-helpers';

import angular from 'angular';
import 'angular-ui-router';
import 'ocLazyLoad';
import 'common/core';
import routing from 'common/utils/routing';
import bootstrap from 'common/utils/bootstrap';
import template from './app.component.tpl';
import './app.component.css!';

import { Module } from 'decorators/Module';
import { Component } from 'decorators/Component';

appModuleConfig.$inject = ['$urlRouterProvider', '$locationProvider', '$compileProvider', '$logProvider', '$httpProvider', '$ocLazyLoadProvider'];
export function appModuleConfig($urlRouterProvider, $locationProvider, $compileProvider, $logProvider, $httpProvider, $ocLazyLoadProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $httpProvider.useApplyAsync(true);
    $urlRouterProvider.otherwise('/dashboards');

    if (window.prod) {
        $logProvider.debugEnabled(false);
        // http://ng-perf.com/2014/10/24/simple-trick-to-speed-up-your-angularjs-app-load-time/
        $compileProvider.debugInfoEnabled(false);
    }

    $ocLazyLoadProvider.config({
        debug: true
    });
};


@Module({
    name: 'sdnSeed',
    dependencies: [
        'ui.router',
        'oc.lazyLoad',
        template.name
    ],
    configs: [
        appModuleConfig
    ]
})
@Component({
    selector: 'sdn-seed',
    templateUrl: template.name
})
export class AppComponent {

    /* @ngInject */
    constructor() {}
}

let appModule = angular.module('sdnSeed');

appModule.config(routing(appModule));