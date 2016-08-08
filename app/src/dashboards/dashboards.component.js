import template from 'app/dashboards/dashboards.component.tpl';

export class DashboardsComponent {

    /* @ngInject */
    constructor($log) {
        $log.debug('dashboard!');
    }

}

DashboardsComponent.$$name = 'dashboards';

DashboardsComponent.$$config = {
    selector: 'dashboards',
    templateUrl: template.name,
    controller: DashboardsComponent
};


