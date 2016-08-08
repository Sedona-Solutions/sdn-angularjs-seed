import angular from 'angular';

import { BuilderComponent } from 'app/admin/builder.component';
import { UsersComponent } from 'app/admin/users.component';
import { MessageService } from 'app/admin/message.service';
import { AdminComponent } from 'app/admin/admin.component';

import { generateRoutesConfigurations } from 'common/utils/routes';

export let AdminModule = {
    name: 'admin',
    dependencies: [
        BuilderComponent.$$config.templateUrl,
        UsersComponent.$$config.templateUrl,
        AdminComponent.$$config.templateUrl
    ],
    component: AdminComponent
};

export const ROUTES = [
    { name: 'admin.builder', path: '/builder', component: BuilderComponent },
    { name: 'admin.users', path: '/users', component: UsersComponent }
];

let routesConfigurators = generateRoutesConfigurations(ROUTES);

export let module = angular.module(AdminModule.name, AdminModule.dependencies)
    .service(MessageService.$$id, MessageService)
    .component(BuilderComponent.$$name, BuilderComponent.$$config)
    .component(UsersComponent.$$name, UsersComponent.$$config)
    .component(AdminComponent.$$name, AdminComponent.$$config)
    .config(routesConfigurators.states)
    .config(routesConfigurators.futureStates);
