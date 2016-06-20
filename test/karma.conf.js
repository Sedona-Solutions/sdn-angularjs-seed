// Karma configuration

module.exports = function (config) {
    config.set({

        logLevel : config.LOG_DEBUG,

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
        reporters: ['spec', 'coverage'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // list of files / patterns to load in the browser
        files: [
            'test/unit/*.js'
        ],

        // list of files to exclude
        exclude: [
        ],

        systemjs: {
            configFile: 'app/system.config.js',
            config: {
                transpiler: 'babel',
                paths: {
                    "github:*": "/base/app/libs/github/*",
                    "npm:*": "/base/app/libs/npm/*",
                    'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
                    'systemjs': 'node_modules/systemjs/dist/system.js',
                    'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
                    'babel': 'node_modules/babel-core/lib/api/browser.js',
                    'phantomjs-polyfill': 'node_modules/phantomjs-polyfill/bind-polyfill.js',
                    "app/*": "target/tmp/src/*",
                    "common/*": "target/tmp/src/common/*",
                    "config/*": "target/tmp/config/*",
                    "assets/*": "target/tmp/assets/*"
                }
            },

            serveFiles: [
                'app/libs/**/*',
                'target/tmp/src/**/*.js',
                'target/tmp/src/**/*.css',
                'target/tmp/config/*.json'
            ]
        },

        proxies: {
            '/test': '/base/test',
            '/tmp': '/base/target/tmp',
            '/node_modules': '/base/node_modules'
        },

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/src/*.js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'target/coverage/',
            instrumenters: {isparta: require('isparta')},
            instrumenter: {
                '**/*.js': 'isparta'
            }
        }

    });
};
