import angular from 'angular';
import modalModule from 'common/components/modal';
import template from './demo-forms.component.tpl';
import { Module } from 'decorators/Module';
import { Component } from 'decorators/Component';
import { routes } from 'common/utils/routes';

@Module({
    name: 'forms',
    dependencies: [
      template.name,
      modalModule.name
    ]
})
@Component({
    selector: 'demoforms',
    templateUrl: template.name
})
export class DemoFormsComponent {

    /* @ngInject */
    constructor(){
    }
}

angular.module('forms').config(
    routes([
        {name: 'forms', path: '/forms', component: DemoFormsComponent}
    ])
);
