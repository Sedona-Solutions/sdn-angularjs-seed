import angular from 'angular';
import { Component } from 'decorators/Component';
import { Module } from 'decorators/Module';

import template from 'app/admin/users.component.tpl';

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
