var minimist = require('minimist');
var util = require('util');
var _ = require('lodash');


// the only available configuration keys
var configKeys = ['api', 'prism'];

// the only available environments
var possibleEnvs = [
    // every day development
    'development',
    // not the "real" production environment, but the closer to it
    'production',
    // backend upgrades, tests, etc ...
    'implementation',
    // local overrides thanks to the local-config.js file
    'local'
];

// global configuration for every environment
var config = {
    api: {
        default: {
            protocol: 'http',
            host: 'localhost',
            port: '8080',
            basepath: '/backend-web/rest',
            route: '/rest'
        },
        development: {}
        ,
        production: {
            // you should put the configuration for the ci or production backend server here
        },
        implementation: {}
    },
    prism: {
        default: {
            mode: 'proxy',
            port: '3000'
        },
        development: {
            mode: 'mockrecord'
        },
        production: {
            mode: 'proxy'
        },
        implementation: {
            mode: 'record'
        }
    }
};

// environment setter
var setEnv = function (newEnv) {
    // console.info('info : setting environment to ' + newEnv);
    if (possibleEnvs.indexOf(newEnv) > -1) {
        env = newEnv;
    }
};

var env = 'development';

// load local environment configuration
try {
    var localConfig = require('./local-config.js');
    if (localConfig.config) {
        configKeys.forEach((key) => {
            if (localConfig.config[key]) {
                config[key].local = localConfig.config[key];
            }
        });
        setEnv(localConfig[env] || 'local');
    } else if (localConfig[env]) {
        setEnv(localConfig[env]);
    }
} catch (ex) {
    console.info('info : no local configuration');
}

// set the default environment from the NODE_ENV environment variable
env = process.env.NODE_ENV || env;

// get the cli options
var knownOptions = {
    string: 'env'
};

var options = minimist(process.argv.slice(2), knownOptions);

// define the environment from the --env cli option if specified
if (options.env) {
    setEnv(options.env);
}

console.info('environment : ' + env);

module.exports = {
    getConfig: function (key) {
        if (typeof config[key] !== 'undefined' && !_.isEmpty(config[key])) {
            var rslt = _.merge(config[key].default, config[key][env]);
            // console.info('info : config.' + key + '.' + env + ' returned ' + util.inspect(rslt, false, null));
            return rslt;
        }
        throw key + ' is not a valid configuration key';
    },
    getEnv: function () {
        return env;
    },
    options
};
