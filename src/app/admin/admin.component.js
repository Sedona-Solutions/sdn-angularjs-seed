import adminTemplate from './admin.component.tpl';

export let adminState = {
    url: '/admin',
    template: '<admin></admin'
};
export let adminComponent = {
    templateUrl: adminTemplate.name,
    controller: Admin
};
class Admin {

    /*@ngInject*/
    constructor() {
        console.log('admin!');
    }

}