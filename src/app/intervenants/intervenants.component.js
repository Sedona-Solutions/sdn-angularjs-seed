import angular from 'angular';
import {Component} from 'decorators/Component';
import {Module} from 'decorators/Module';
import {Routes} from 'decorators/Routes';

import template from 'app/intervenants/intervenants.component.tpl';

import { REST_ROUTES } from 'common/REST_ROUTES';
import { WORDING } from 'common/WORDING';

import { IntervenantsService } from 'app/intervenants.service.js';

@Routes([])
@Module({
    name: 'intervenants',
    dependencies: []
})
@Component({
    selector: 'intervenants',
    templateUrl: template.name
})
export class IntervenantsComponent {

    /* @ngInject */
    constructor(Restangular) {
        this.restIntervenants = Restangular.all(REST_ROUTES.intervenants);
        this.wording = WORDING.intervenants;
    }

    $onInit() {
        this.intervenants = this.restIntervenants.getList();
    }
}
