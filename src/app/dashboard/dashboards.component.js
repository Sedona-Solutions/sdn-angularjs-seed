import angular from 'angular';
import { modalModule } from 'common/core';
import popupModule from 'common/components/popup';
import timeModule from 'common/components/time';
import template from 'app/dashboard/dashboards.component.tpl';
import { Module } from 'decorators/Module';
import { Component } from 'decorators/Component';

@Module({
    name: 'dashboards',
    dependencies: [
        modalModule.name,
        popupModule.name,
        timeModule.name
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