import template from './admin.component.tpl';
export { default as template} from './admin.component.tpl';

export let selector = 'admin';
export let component = {
    templateUrl : template.name
};
export class Admin {

    /*@ngInject*/
    constructor() {
        console.log('admin!');
    }

}
