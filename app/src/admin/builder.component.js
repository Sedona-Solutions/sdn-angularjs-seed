import angular from 'angular';

import { Module } from 'decorators/Module';
import { Component } from 'decorators/Component';

import template from 'app/admin/builder.component.tpl';

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
