import template from './admin.component.tpl';
import { Component } from 'decorators/Component';
import { Module } from 'decorators/Module';
import { BuilderComponent } from 'app/admin/builder/builder.component';
import { UsersComponent } from 'app/admin/users/users.component';
import { routes } from 'common/utils/routes';

@Module({
    name: 'admin',
    dependencies: [
        BuilderComponent.$ngmodule.name,
        UsersComponent.$ngmodule.name,
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
