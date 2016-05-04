import angular from 'angular';
import BuilderModule from 'app/admin/builder/builder';
import UsersModule from 'app/admin/users/users';
import { adminComponent, adminState } from 'app/admin/admin.component';
import adminTemplate from './admin.component.tpl';

/* @ngInject */
let routeConfig = ($stateProvider) => {
    $stateProvider.state('admin', adminState);
};

let adminModule = angular.module('admin', [
    BuilderModule.name,
    UsersModule.name,
    adminTemplate.name
])
.component('admin', adminComponent)
.config(routeConfig);

export default adminModule;