import angular from 'angular';

import modalModule from 'common/components/modal';
import selectModule from 'common/components/select';
import template from './builder.component.tpl';
import { Module } from 'decorators/Module';
import { Component } from 'decorators/Component';


@Module({
    name: 'admin.builder',
    dependencies: [
        modalModule.name,
        selectModule.name,
        template.name
    ]
})
@Component({
    selector: 'builder',
    templateUrl: template.name
})
export class BuilderComponent {

    /*@ngInject*/
    constructor($scope) {
        console.log('builder!')
    }

}