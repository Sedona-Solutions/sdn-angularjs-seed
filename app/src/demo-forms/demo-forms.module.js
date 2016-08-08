import { DemoFormsComponent } from 'app/demo-forms/demo-forms.component';

export let DemoFormsModule = {
    name: 'demoForms',
    dependencies: [
        DemoFormsComponent.$$config.templateUrl
    ],
    component: DemoFormsComponent
};

export let module = angular.module(DemoFormsModule.name, DemoFormsModule.dependencies)
    .component(DemoFormsComponent.$$name, DemoFormsComponent.$$config);
