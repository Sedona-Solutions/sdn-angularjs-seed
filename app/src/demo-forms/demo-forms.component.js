import template from 'app/demo-forms/demo-forms.component.tpl';

export class DemoFormsComponent {

    /* @ngInject */
    constructor() {
    }
}

DemoFormsComponent.$$name = 'demoForms';

DemoFormsComponent.$$config = {
    selector: 'demo-forms',
    templateUrl: template.name,
    controller: DemoFormsComponent
};

