import angular from 'angular';

export let bootstrap = (component) => {

    angular.element(document).ready(() => {
        let wrapper = document.createElement('div'),
            componentElmt = document.getElementsByTagName(component.$kissDecoratorsConfig.selector)[0];
        componentElmt.parentNode.insertBefore(wrapper, componentElmt);
        wrapper.appendChild(componentElmt);
        angular.bootstrap(wrapper, [component.$ngmodule.name], {
            strictDi: true
        });
    });
};
