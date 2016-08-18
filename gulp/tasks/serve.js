var gulp = require('gulp');
var browserSync = require('browser-sync');
var connect = require('connect');
var prism = require('connect-prism');
var config = require('../config');
var http = require('http');
var proxy = require('http-proxy-middleware');

function prismInit(prismMode) {
    prismMode = prismMode || 'proxy';

    console.info('prism mode : ' + prismMode);
    var prismConfig = {
        name: 'api',
        mode: prismMode,
        context: config.getConfig('api').basepath,
        host: config.getConfig('api').host,
        port: config.getConfig('api').port,
        delay: 'auto',
        rewrite: {
        }
    };

    prism.create(prismConfig);

    var app = connect()
        .use(prism.middleware);

    http.createServer(app).listen(config.getConfig('prism').port);
}

function browserSyncInit(done) {

    var pathRewrite = {};
    pathRewrite[`^${config.getConfig('api').route}`] = config.getConfig('api').basepath;

    var apiProxy = proxy(config.getConfig('api').route, {
        target: 'http://localhost:' + config.getConfig('prism').port,
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
    prismInit(config.getConfig('prism').mode);
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
