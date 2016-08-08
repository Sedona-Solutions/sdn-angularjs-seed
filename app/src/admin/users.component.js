import template from 'app/admin/users.component.tpl';

export class UsersComponent {

    /* @ngInject */
    constructor($log) {
        $log.debug('users!');
    }
}

UsersComponent.$$config = {
    selector: 'users',
    templateUrl: template.name,
    controller: UsersComponent
};
