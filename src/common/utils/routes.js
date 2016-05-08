import angular from 'angular';

export let routes = (configs) => {
    let params = configs.map((config) => {
        let paramObj = {
            name: config.name || config.component.$kissDecoratorsConfig.name,
            config: {
                url: config.path,
                template: config.template || `
                    <${config.component.$kissDecoratorsConfig.selector}>
                    </${config.component.$kissDecoratorsConfig.selector}>
                `
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
        });
    }

    return RouteConfig;
};
