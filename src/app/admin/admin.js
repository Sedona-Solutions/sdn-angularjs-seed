import angular from 'angular';
import BuilderModule from 'app/admin/builder/builder';
import UsersModule from 'app/admin/users/users';
import adminComponent from 'app/admin/admin.component';

let adminModule = angular.module('admin', [
    BuilderModule.name,
    UsersModule.name
]);

adminComponent(adminModule);

export default adminModule;