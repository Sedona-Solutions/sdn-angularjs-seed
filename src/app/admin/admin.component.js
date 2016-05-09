import template from './admin.component.tpl';
import { Component } from 'decorators/Component';
import { Module } from 'decorators/Module';
import { BuilderComponent } from 'app/admin/builder/builder.component';
import { UsersComponent } from 'app/admin/users/users.component';
import { Routes } from 'decorators/Routes';
import { routes } from 'common/utils/routes';
import './admin.component.css!';

@Routes([
    {name: 'admin.builder', path: '/builder', component: BuilderComponent},
    {name: 'admin.users', path: '/users', component: UsersComponent}
])
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
