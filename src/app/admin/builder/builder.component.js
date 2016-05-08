import angular from 'angular';

import modalModule from 'common/components/modal';
import selectModule from 'common/components/select';
import template from './builder.component.tpl';

@Module({
    name: 'admin.build',
    dependencies: [
        modalModule.name,
        selectModule.name,
        template.name
    ]
})
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

angular.module('admin.users').config(
    routes([
        {name: 'admin.builder', path: '/builder', component: BuilderComponent}
    ])
);
