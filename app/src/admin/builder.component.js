import angular from 'angular';

import { Module } from 'ng-transition/ng1';
import { Component } from 'ng-transition/core';

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
