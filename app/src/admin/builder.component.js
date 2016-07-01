import { Component } from 'ng-transition/core';

import template from 'app/admin/builder.component.tpl';

@Component({
    selector: 'builder',
    templateUrl: template.name
})
export class BuilderComponent {

    /*@ngInject*/
    constructor($scope) {
        console.log('builder!')
    }

}
