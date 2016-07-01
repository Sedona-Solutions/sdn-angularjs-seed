import { modalModule } from 'common/core';
import popupModule from 'common/components/popup';
import timeModule from 'common/components/time';
import template from 'app/dashboards/dashboards.component.tpl';
import { Module } from 'ng-transition/ng1';
import { Component } from 'ng-transition/core';

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
