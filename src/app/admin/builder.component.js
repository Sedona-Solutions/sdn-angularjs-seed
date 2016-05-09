import angular from 'angular';

import modalModule from 'common/components/modal';
import template from './builder.component.tpl';
import { Module } from 'decorators/Module';
import { Component } from 'decorators/Component';

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
