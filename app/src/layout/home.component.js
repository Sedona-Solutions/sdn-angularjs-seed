import {Component} from 'ng-transition/core';

import template from 'app/layout/home.component.tpl';

@Component({
    selector: 'home',
    templateUrl: template.name
})
export class HomeComponent {

    /* @ngInject */
    constructor($log) {
        $log.debug('home component');
        this.name = 'home';
    }

}
