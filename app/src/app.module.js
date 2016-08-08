import { DashboardsComponent } from 'app/dashboards/dashboards.component';
import { DashboardsModule } from 'app/dashboards/dashboards.module';
import { HomeComponent } from 'app/layout/home.component';
import { AppComponent } from 'app/app.component';

import * as AppConfig from 'app/app.config';

import { generateRoutesConfigurations } from 'common/utils/routes';

export let AppModule = {
    name: 'sdnSeed',
    dependencies: [
        'ui.router',
        'oc.lazyLoad',
        'ct.ui.router.extras',
        'ngMaterial',
        'restangular',
        AppComponent.$$config.templateUrl,
        HomeComponent.$$config.templateUrl,
        DashboardsModule.name
    ]
};

export const ROUTES = [
    { name: 'admin', path: '/admin', lazy: true, module: 'app/admin/admin.module' },
    { name: 'dashboards', path: '/dashboards', component: DashboardsComponent },
    { name: 'forms', path: '/forms', lazy: true, module: 'app/demo-forms/demo-forms.module' },
    { path: '/', component: HomeComponent, useAsDefault: true }
];

let routesConfigurations = generateRoutesConfigurations(ROUTES, true);

export let module = angular.module(AppModule.name, AppModule.dependencies)
    .config(AppConfig.lazyLoadConfig)
    .config(AppConfig.mdTheming)
    .config(AppConfig.debugConfig)
    .component(AppComponent.$$name, AppComponent.$$config)
    .component(HomeComponent.$$name, HomeComponent.$$config)
    .config(routesConfigurations.default)
    .config(routesConfigurations.states)
    .config(routesConfigurations.futureStates);
