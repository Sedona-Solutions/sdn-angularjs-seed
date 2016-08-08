import 'babel/external-helpers';

import 'angular-ui-router';
import 'ui-router-extras';
import 'ocLazyLoad';
import 'common/core';
import './app.component.css!';
import 'angular-material';
import 'angular-material/angular-material.min.css!';
import 'restangular';

import 'app/app.component.css!';

import template from 'app/app.component.tpl';

import * as MaterialUtil from 'common/MaterialUtil';

export class AppComponent {

    /* @ngInject */
    constructor($log, $mdSidenav) {
        $log.debug('App Component');
        this.toggleLeftMenu = MaterialUtil.buildToggler($mdSidenav, $log, 'main-left');
    }

}

AppComponent.$$name = 'sdnSeed';

AppComponent.$$config = {
    selector: 'sdn-seed',
    templateUrl: template.name,
    controller: AppComponent
};
