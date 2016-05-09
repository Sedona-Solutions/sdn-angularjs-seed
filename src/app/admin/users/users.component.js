import angular from 'angular';
import template from './users.component.tpl';
import { Component } from 'decorators/Component';
import { Module } from 'decorators/Module';

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
