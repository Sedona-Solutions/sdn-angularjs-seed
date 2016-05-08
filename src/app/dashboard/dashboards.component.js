import angular from 'angular';
import { modalModule } from 'common/core';
import popupModule from 'common/components/popup';
import timeModule from 'common/components/time';
import template from './dashboards.component.tpl';
import { Module } from 'decorators/Module';
import { Component } from 'decorators/Component';
import { routes } from 'common/utils/routes';

@Module({
    name: 'dashboards',
    dependencies: [
        modalModule.name,
        popupModule.name,
        timeModule.name,
        template.name
    ]
})
@Component({
    selector: 'dashboards',
    templateUrl: template.name
})
export class DashboardComponent {

    /* @ngInject */
    constructor($scope) {
        console.log('dashboard!');
    }

}

angular.module('dashboards').config(
    routes([{
        path: '/dashboards',
        component: DashboardComponent
    }])
);
