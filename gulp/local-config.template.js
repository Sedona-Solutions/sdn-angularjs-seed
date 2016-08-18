// copy this file to ./local-config.js to configure the 'local' environment
module.exports = {
    // default environment ( 'development', 'production', 'local' or 'implementation')
    env: 'development',
    config: {
        api: {
            protocol: 'http',
            host: 'localhost',
            port: '8080',
            basepath: '/backend-web/rest',
            route: '/rest'
        },
        prism: {
            mode: 'proxy',
            port: '3000'
        }
    }
};
