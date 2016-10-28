// Karma configuration

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '..',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['systemjs', 'jasmine'],

        plugins: [
            'karma-systemjs',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
            // 'karma-remap-istanbul',
            'karma-spec-reporter'
        ],

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // issue #5 : karma-remap-istanbul
        // reporters: ['spec', 'coverage', 'karma-remap-istanbul'],
        reporters: ['spec', 'coverage'],

        // Continuous Integration model
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // list of files / patterns to load in the browser
        files: [
            'test/app/{,**/}*.js',
            'app/libs/github/systemjs/plugin-json@0.1.2/json.js'
        ],

        // list of files to exclude
        exclude: [],

        systemjs: {
            configFile: 'app/system.config.js',
            config: {
                transpiler: 'babel',
                paths: {
                    "systemjs-test/*": "./*",
                    "bundles/*": "bundles/*",
                    "jspm_packages/*": "libs/*",
                    "github:*": "app/libs/github/*",
                    "npm:*": "app/libs/npm/*",
                    'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
                    'systemjs': 'app/libs/system.js',
                    'system-polyfills': 'app/libs/system-polyfills.js',
                    'babel': 'app/libs/npm/babel-core/browser.js',
                    'phantomjs-polyfill': 'node_modules/phantomjs-polyfill/bind-polyfill.js',
                    "common/*": "target/tmp/src/common/*",
                    "config/*": "target/tmp/config/*",
                    "assets/*": "target/tmp/assets/*",
                    "app/*": "target/tmp/src/*"
                }
            },

            serveFiles: [
                'app/libs/{,**/}*',
                'target/tmp/src/{,**/}*.js',
                'target/tmp/src/{,**/}*.css',
                'target/tmp/config/*.json'
            ]
        },

        proxies: {
            '/test': '/base/test',
            '/node_modules': '/base/node_modules'
        },

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'target/tmp/src/{,**/}!(*tpl).js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            reporters: [
                {
                    type: 'text-summary'
                },
                {
                    type: 'html',
                    dir: 'target/coverage/html'
                },
                {
                    type: 'json',
                    dir: 'target/coverage/',
                    subdir: '.',
                    file: 'coverage-final.json'
                }
            ]
            // possible resolution on #5 via isparta
            // instrumenters: {isparta: require('isparta')},
            // instrumenter: {
            //     '**/*.js': 'isparta'
            // }
        }

        // possible resolution on #5 via karma-remap-istanbul
        // remapIstanbulReporter: {
        //     src: 'target/coverage/coverage-final.json',
        //     reports: {
        //         html: 'target/coverage/remap'
        //     },
        //     timeoutNotCreated: 1000,
        //     timeoutNoMoreFiles: 1000
        // }

    });
};
