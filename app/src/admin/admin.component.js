import 'app/admin/admin.component.css!';
import template from 'app/admin/admin.component.tpl';

export class AdminComponent {

    /* @ngInject */
    constructor($log, messageService) {
        $log.debug('admin!');
        this.messageService = messageService;
    }

    getMessage() {
        this.message = this.messageService.message;
    }

}

AdminComponent.$$name = 'admin';

AdminComponent.$$config = {
    selector: 'admin',
    templateUrl: template.name,
    controller: AdminComponent
};
