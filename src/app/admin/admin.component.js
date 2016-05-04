import template from './admin.component.tpl';
import state from 'common/utils/state';
import component from 'common/utils/component';

export let selector = 'admin';

export default (module) => {

    component({
        module,
        selector,
        template
    });

    state({
        module,
        name: selector
    });
}
class Admin {

    /*@ngInject*/
    constructor() {
        console.log('admin!');
    }

}