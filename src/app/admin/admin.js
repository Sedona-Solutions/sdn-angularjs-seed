import angular from 'angular';
import BuilderModule from 'app/admin/builder/builder';
import UsersModule from 'app/admin/users/users';
import * as AdminComponent from 'app/admin/admin.component';
import routes from 'common/utils/routes';

export default angular.module('admin', [
    BuilderModule.name,
    UsersModule.name,
    AdminComponent.template.name
])
.config(routes([
    {path: '/admin', component: AdminComponent}
]))
.component(AdminComponent.selector, AdminComponent.component);
