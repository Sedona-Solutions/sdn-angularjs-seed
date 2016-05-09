import template from 'app/admin/admin.component.tpl';
import { Component } from 'decorators/Component';
import { Module } from 'decorators/Module';
import { BuilderComponent } from 'app/admin/builder/builder.component';
import builderTemplate from 'app/admin/builder/builder.component.tpl';
import usersTemplate from 'app/admin/users/users.component.tpl';
import { UsersComponent } from 'app/admin/users/users.component';
import { Routes } from 'decorators/Routes';
import './admin.component.css!';

@Routes([
    {name: 'admin.builder', path: '/builder', component: BuilderComponent},
    {name: 'admin.users', path: '/users', component: UsersComponent}
])
@Module({
    name: 'admin',
    dependencies: [
        builderTemplate.name,
        usersTemplate.name,
        template.name
    ]
})
@Component({
    selector: 'admin',
    templateUrl : template.name,
    directives: [
        BuilderComponent,
        UsersComponent
    ]
})
export class AdminComponent {

    /* @ngInject */
    constructor() {
        console.log('admin!');
    }

}
