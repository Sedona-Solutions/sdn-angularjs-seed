import { Component } from 'decorators/Component';
import { Module } from 'decorators/Module';
import { Routes } from 'decorators/Routes';

import { BuilderComponent } from 'app/admin/builder.component';
import { UsersComponent } from 'app/admin/users.component';
import { MessageService } from 'app/admin/message.service';

import 'app/admin/admin.component.css!';
import template from 'app/admin/admin.component.tpl';

@Routes([
    {name: 'admin.builder', path: '/builder', component: BuilderComponent},
    {name: 'admin.users', path: '/users', component: UsersComponent}
])
@Module({
    name: 'admin'
})
@Component({
    selector: 'admin',
    templateUrl : template.name,
    directives: [
        BuilderComponent,
        UsersComponent
    ],
    providers: [
        MessageService
    ]
})
export class AdminComponent {

    /* @ngInject */
    constructor(messageService) {
        console.log('admin!');
        this.messageService = messageService;
    }

    getMessage() {
        this.message = this.messageService.message;
    }

}
