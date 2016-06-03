import 'babel/external-helpers';

import angular from 'angular';
import 'angular-ui-router';
import 'ui-router-extras';
import 'ocLazyLoad';
import 'common/core';
import './app.component.css!';
import 'angular-material';
import 'angular-material/angular-material.min.css!';
import 'restangular';

import 'angular-material/angular-material.min.css!';
import 'app/app.component.css!';

import { Module } from 'decorators/Module';
import { Component } from 'decorators/Component';
import { lazyLoadConfig } from 'decorators/utils/routes';
import { Routes } from 'decorators/Routes';
import { DashboardComponent } from 'app/dashboard/dashboards.component';

import { HomeComponent } from 'app/layout/home.component';

import template from 'app/app.component.tpl';

import * as Config from 'app/app.config';

@Routes([
    {name: 'admin', path: '/admin', lazy: true, component: 'app/admin/admin.component'},
    {name: 'dashboards', path: '/dashboards', component: DashboardComponent},
    {name: 'forms', path: '/forms', lazy: true, component: 'app/forms/demo-forms.component'},
    {path: '/', component: HomeComponent, useAsDefault: true}
])
@Module({
    name: 'sdnSeed',
    dependencies: [
        'ui.router',
        'oc.lazyLoad',
        'ct.ui.router.extras',
        'ngMaterial',
        'restangular',
        DashboardComponent.$ngmodule.name
    ],
    main: true,
    html5mode: {
        enabled: true,
        requireBase: false
    },
    debug: true,
    configs: [
        Config.mdTheming
    ]
})
@Component({
    selector: 'sdn-seed',
    templateUrl: template.name,
    directives: [
        HomeComponent
    ]
})
export class AppComponent {

    /* @ngInject */
    constructor($log) {
        $log.debug('App Component');
    }
}
