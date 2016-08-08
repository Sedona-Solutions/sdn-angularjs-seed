import template from 'app/admin/builder.component.tpl';

export class BuilderComponent {

    /* @ngInject */
    constructor($log) {
        $log.debug('builder!');
    }

}

BuilderComponent.$$name = 'builder';

BuilderComponent.$$config = {
    selector: 'builder',
    templateUrl: template.name,
    controller: BuilderComponent
};
