import modalModule from 'common/components/modal';
import { Module } from 'ng-transition/ng1';
import { Component } from 'ng-transition/core';
import template from 'app/demo-forms/demo-forms.component.tpl';

@Module({
    name: 'forms',
    dependencies: [
        modalModule.name
    ]
})
@Component({
    selector: 'demo-forms',
    templateUrl: template.name
})
export class DemoFormsComponent {

    /* @ngInject */
    constructor() {}
}
