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
import { DashboardComponent } from 'app/dashboard/dashboards.component';

@Routes([
    {name: 'admin', path: '/admin', lazy: true, component: 'app/admin/admin.component'},
    {name: 'dashboards', path: '/dashboards', component: DashboardComponent, useAsDefault: true},
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
    main: true,
    html5mode: {
        enabled: true,
        requireBase: false
    },
    debug: true
})
@Component({
    selector: 'sdn-seed',
    templateUrl: template.name
})
export class AppComponent {

    /* @ngInject */
    constructor() {}
}