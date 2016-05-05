import angular from 'angular';

export default (configs) => {
    let params = configs.map((config) => {
        let paramObj = {
            name: config.name || config.component.selector,
            config: {
                url: config.path,
                template: config.template || `<${config.component.selector}></${config.component.selector}>`
            }
        };

        if (config.parent) {
            paramObj.config.parent = parent;
        }

        if (angular.isDefined(config.abstract)) {
            paramObj.config.abstract = !!config.abstract;
        }

        if (config.data) {
            paramObj.config.data = config.data;
        }

        if (config.resolve) {
            paramObj.config.resolve = config.resolve;
        }

        return paramObj;
    });


    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        params.forEach((definition) => {
            $stateProvider.state(definition.name, definition.config);
        })
    }

    return RouteConfig;
};
