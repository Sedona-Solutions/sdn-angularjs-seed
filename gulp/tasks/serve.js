var gulp = require('gulp');
var browserSync = require('browser-sync');
var connect = require('connect');
var prism = require('connect-prism');
var config = require('../config');
var http = require('http');
var proxy = require('http-proxy-middleware');

var minimist = require('minimist');

var knownOptions = {
    string: 'prism',
    default: { prism: 'proxy' }
};

var options = minimist(process.argv.slice(2));

function prismInit(prismMode) {
    prismMode = prismMode || 'proxy';

    console.info('prism mode : ' + prismMode);
    var prismConfig = {
        name: 'api',
        mode: prismMode,
        context: config.api.basepath,
        host: 'localhost',
        port: 8080,
        delay: 'auto',
        rewrite: {
        }
    };

    prism.create(prismConfig);

    var app = connect()
        .use(prism.middleware);

    http.createServer(app).listen(3000);
}

function browserSyncInit(done) {

    var pathRewrite = {};
    pathRewrite[`^${config.api.route}`] = config.api.basepath;

    var apiProxy = proxy(config.api.route, {
        target: 'http://localhost:3000',
        changeOrigin: true, // for vhosted sites, changes host header to match to target's host
        pathRewrite: pathRewrite,
        logLevel: 'debug'
    });
    
    browserSync({
        open: false,
        port: 9000,
        server: {
            baseDir: ['target/tmp/'],
            middleware: [ apiProxy ]
        }
    }, done);
}

gulp.task('serve', ['watch'], function (done) {
    prismInit(options.prism);
    browserSyncInit(done);
});

gulp.task('serve:prod', ['release'], function (done) {
    browserSync({
        open: false,
        port: 9001,
        server: {
            baseDir: ['target/dist/app/']
        }
    }, done);
});
