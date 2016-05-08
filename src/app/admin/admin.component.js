import template from './admin.component.tpl';
import { Component } from 'decorators/Component';
import { Module } from 'decorators/Module';
import BuilderModule from 'app/admin/builder/builder';
import UsersModule from 'app/admin/users/users';
import { routes } from 'common/utils/routes';

@Module({
    name: 'admin',
    dependencies: [
        BuilderModule.name,
        UsersModule.name,
        template.name
    ]
})
@Component({
    selector: 'admin',
    templateUrl : template.name
})
export class AdminComponent {

    /* @ngInject */
    constructor() {
        console.log('admin!');
    }

}

angular.module('admin').config(
    routes([
        {path: '/admin', component: AdminComponent}
    ])
);
