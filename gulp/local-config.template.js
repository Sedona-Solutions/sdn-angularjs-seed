// copy this file to ./local-config.js to configure the 'local' environment
module.exports = {
    // default environment ( 'development', 'production', 'local' or 'implementation')
    env: 'development',
    config: {
        // backend api configuration
        api: {
            protocol: 'http',
            host: 'localhost',
            port: '8080',
            basepath: '/backend-web/rest',
            route: '/rest'
        },
        // backend connect-prism proxy configuration
        prism: {
            // connect-prism mode : 'record' | 'mock' | 'proxy' | 'mockrecord'
            // cf. https://github.com/seglo/connect-prism#mode
            mode: 'proxy',
            port: '3000'
        }
    }
};
