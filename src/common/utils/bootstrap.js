import angular from 'angular';

export let bootstrap = (app) => {
    angular.element(document).ready(function() {
        angular.bootstrap(document.body, [app.name], {
            strictDi: true
        });
    });
};
