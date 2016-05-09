import angular from 'angular';
import template from './users.component.tpl';
import { Component } from 'decorators/Component';
import { Module } from 'decorators/Module';

@Component({
    selector: 'users',
    templateUrl: template.name
})
export class UsersComponent {

    /* @ngInject */
    constructor() {
        console.log('users!');
    }
}
