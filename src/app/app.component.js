import 'babel/external-helpers';

import angular from 'angular';
import 'angular-ui-router';
import 'ui-router-extras';
import 'ocLazyLoad';
import './app.component.css!';
import 'angular-material';
import 'restangular';

import 'angular-material/angular-material.min.css!';
import 'app/app.component.css!';

import { Module } from 'decorators/Module';
import { Component } from 'decorators/Component';
import { lazyLoadConfig } from 'decorators/utils/routes';
import { Routes } from 'decorators/Routes';

import { HomeComponent } from 'app/layout/home.component';

@Routes([
    {name: 'home', path: '/', component: HomeComponent, useAsDefault: true},
    {name: 'intervenants', path: '/intervenants', lazy: true, component: 'app/intervenants/intervenants.component'}
])
@Module({
    name: 'periclesApp',
    dependencies: [
        'ui.router',
        'oc.lazyLoad',
        'ct.ui.router.extras',
        'ngMaterial',
        'restangular'
    ],
    main: true,
    html5mode: {
        enabled: true,
        requireBase: false
    },
    debug: true
})
@Component({
    selector: 'pericles-app',
    templateUrl: 'app/app.component.tpl'
})
export class AppComponent {

    /* @ngInject */
    constructor($log) {
        $log.debug('appComponent');
    }
}
