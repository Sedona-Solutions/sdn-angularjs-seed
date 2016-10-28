import 'babel/external-helpers';

// don't remove this, or you won't be hable to import json files
import 'json';

// each common/* file that is used by this project needs to be imported here
// even the ones that are used only in lazy loaded modules
import 'common/REST_PATHS.js';
import 'common/WORDING.js';

// each library needs to be imported here
// even the ones that are used only in lazy loaded modules
import 'angular-ui-router';
import 'ui-router-extras';
import 'ocLazyLoad';
import 'common/core';
import './app.component.css!';
import 'angular-material';
import 'angular-material/angular-material.min.css!';
import 'restangular';
import * as config from 'config/config.json!';

import 'app/app.component.css!';

import { Module } from 'ng-transition/ng1';
import { Component } from 'ng-transition/core';
import { Routes } from 'ng-transition/router';

import { DashboardComponent } from 'app/dashboards/dashboards.component';

import { HomeComponent } from 'app/layout/home.component';

import template from 'app/app.component.tpl';

import * as Config from 'app/app.config';
import * as MaterialUtil from 'common/MaterialUtil';

@Routes([
    { name: 'admin', path: '/admin', lazy: true, component: 'app/admin/admin.component' },
    { name: 'dashboards', path: '/dashboards', component: DashboardComponent },
    { name: 'forms', path: '/forms', lazy: true, component: 'app/demo-forms/demo-forms.component' },
    { path: '/', component: HomeComponent, useAsDefault: true }
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
        enabled: config.html5,
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
    constructor($log, $mdSidenav) {
        $log.debug('App Component');
        this.toggleLeftMenu = MaterialUtil.buildToggler($mdSidenav, $log, 'main-left');
    }

}
