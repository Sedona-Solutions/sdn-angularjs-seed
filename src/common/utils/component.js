export default (params) => {
    let { module } = params;
    delete params.module;
    module.requires.push(params.template.name);
    params.templateUrl = params.template.name;
    delete params.template;
    let selector = params.selector;
    delete params.selector;
    module.component(selector, params);
}