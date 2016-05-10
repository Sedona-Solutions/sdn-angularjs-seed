import angular from 'angular';
import modalModule from 'common/components/modal';
import { Module } from 'decorators/Module';
import { Component } from 'decorators/Component';
import template from 'app/forms/demo-forms.component.tpl';

@Module({
    name: 'forms',
    dependencies: [
        modalModule.name
    ]
})
@Component({
    selector: 'demoforms',
    templateUrl: template.name
})
export class DemoFormsComponent {

    /* @ngInject */
    constructor() {}
}