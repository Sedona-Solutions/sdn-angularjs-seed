import { DashboardsComponent } from 'app/dashboards/dashboards.component';

export let DashboardsModule = {
    name: 'dashboards',
    dependencies: [
        DashboardsComponent.$$config.templateUrl
    ]
};

export let module = angular.module(DashboardsModule.name, DashboardsModule.dependencies)
    .component(DashboardsComponent.$$name, DashboardsComponent.$$config);
