import 'babel/external-helpers';

import angular from 'angular';
import 'angular-ui-router';
import 'ui-router-extras';
import 'ocLazyLoad';
import 'common/core';
import bootstrap from 'common/utils/bootstrap';
import template from './app.component.tpl';
import './app.component.css!';

import { Module } from 'decorators/Module';
import { Component } from 'decorators/Component';
import { lazyLoadConfig } from 'decorators/utils/routes';
import { Routes } from 'decorators/Routes';

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

@Routes([
    {name: 'admin', path: '/admin', lazy: true, component: 'app/admin/admin.component'},
    {name: 'dashboards', path: '/dashboards', lazy: true, component: 'app/dashboard/dashboards.component'},
    {name: 'forms', path: '/forms', lazy: true, component: 'app/forms/demo-forms.component'}
])
@Module({
    name: 'sdnSeed',
    dependencies: [
        'ui.router',
        'oc.lazyLoad',
        'ct.ui.router.extras',
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
appModule.config(lazyLoadConfig);