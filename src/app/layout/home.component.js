import angular from 'angular';
import {Component} from 'decorators/Component';


import template from 'app/layout/home.component.tpl';


@Component({
    selector: 'pericles-home',
    templateUrl: template.name
})
export class HomeComponent {

    /* @ngInject */
    constructor() {
    }

}
