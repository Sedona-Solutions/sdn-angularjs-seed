import angular from 'angular';
import { Component } from 'ng-transition/core';
import { Module } from 'ng-transition/ng1';

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
