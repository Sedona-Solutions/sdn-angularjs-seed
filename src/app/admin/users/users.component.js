import angular from 'angular';
import template from './users.component.tpl';
import { Component } from 'decorators/Component';
import { Module } from 'decorators/Module';
import { routes } from 'common/utils/routes';

@Module({
    name: 'admin.users',
    dependencies: [
      template.name
    ]
})
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

angular.module('admin.users').config(
    routes([
        {name: 'admin.users', path: '/users', component: UsersComponent}
    ])
);
