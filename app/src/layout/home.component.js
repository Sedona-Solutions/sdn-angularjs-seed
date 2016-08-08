import template from 'app/layout/home.component.tpl';

export class HomeComponent {

    /* @ngInject */
    constructor($log) {
        $log.debug('home component');
        this.name = 'home';
    }
}

HomeComponent.$$name = 'home';

HomeComponent.$$config = {
    selector: 'home',
    templateUrl: template.name,
    controller: HomeComponent
};
