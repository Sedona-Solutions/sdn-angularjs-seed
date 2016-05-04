
export default (params) => {
    let { module, name } = params;
    let finalParams = {
        url: params.url || `/${name}`,
        template: params.template || `<${name}></${name}`
    };
    if (params.parent) {
        finalParams.parent = params.parent;
    }
    module.config(($stateProvider) => {
        $stateProvider.state(name, finalParams);
    });
};
