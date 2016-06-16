var gulp = require('gulp');
var insert = require('gulp-insert');
var runSequence = require('run-sequence');
var paths = require('../paths');
var Builder = require('systemjs-builder');
var fs = require('fs');
var path = require('path');
var processhtml = require('gulp-processhtml');
var replace = require('gulp-replace');

var bundles = {};

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function (file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory() && file != 'layout';
    });
}

gulp.task('release', function (callback) {
    return runSequence(
        'clean',
        'build',
        'prod:dependencies',
        'bundle',
        'index-process',
        callback
    );
});

gulp.task('bundle', function (callback) {
    var directories = getDirectories('dist/app');
    var modulesBuilder = new Builder('./', paths.systemConfig);
    var toExcludeFromMain = directories.map((moduleName) => {
        return `prod/app/${moduleName}.js`
    });
    toExcludeFromMain.push('prod/config/*');
    toExcludeFromMain = toExcludeFromMain.join(' - ');
    directories.forEach((moduleName) => {
        bundles[`app/${moduleName}.js`] = [`app/${moduleName}/*`];
    });
    bundles['app/main.js'] = ['app/layout/*', 'common/*', 'app/main', 'app/app.*'];

    modulesBuilder.config({
        meta: {
            'jspm_packages/*': {build: false},
            'common/*': {build: false}
        },
        paths: {
            "app/*": "dist/app/*",
            "common/*": "dist/common/*",
            "assets/*": "dist/assets/*"
        }
    });

    var modulesPromises = directories.map((moduleName) => {
        var pathToDir = 'app/' + moduleName + '/';
        var moduleFile = pathToDir + moduleName + '.component.js';

        return modulesBuilder.bundle(moduleFile, 'prod/app/' + moduleName + '.js', {minify: true, sourcemap: true})
            .then(function () {
                console.log(`${moduleName} build complete`);
            })
            .catch(function (err) {
                console.log(`error during ${moduleName} build`);
                console.log(err);
            });
    });

    /* // babel-polyfill bundle - uncomment if you need separated dependencies
    var dependenciesBuilder = new Builder('./', paths.systemConfig);

    modulesPromises.push(
        dependenciesBuilder.bundle(
            'babel/polyfill',
            'prod/bundled_packages/babel-polyfill.js',
            {
                minify: true,
                sourcemap: true
            }
        ).then(() => {
            bundles['bundled_packages/babel-polyfill.js'] = ['babel/polyfill', 'core-js/*', 'core/*'];
        })
    );
    */

    var dependenciesBuilder = new Builder('./', paths.systemConfig);

    modulesPromises.push(
        dependenciesBuilder.bundle(
            'app/main - app/**/* - common/**/*',
            'prod/bundled_packages/all.js',
            {
                minify: true,
                sourcemap: true
            }
        ).then(() => {
            bundles['bundled_packages/all.js'] = ['angular', 'babel/*'];
        })
    );

    Promise.all(modulesPromises).then(() => {
        var mainBuilder = new Builder('./', paths.systemConfig);

        mainBuilder.config({
            meta: {
                /* // uncomment if you need separated dependencies
                'jspm_packages/!*': {build: false}
                */
            },
            paths: {
                "app/*": "dist/app/*",
                "common/*": "dist/common/*",
                "assets/*": "dist/assets/*"
            },
            bundles
        });

        mainBuilder.bundle(`app/main.js - ${toExcludeFromMain}`, 'prod/app/main.js', {
                minify: true,
                sourcemap: true,
                /*runtime: false,
                 format: 'amd'*/
            })
            .then(function () {
                console.log('main module build complete');

                gulp.src(paths.systemConfig)
                    .pipe(replace('// replace:bundles', 'bundles: ' + JSON.stringify(bundles) + ','))
                    // TODO : this is a temporary solution - see next commented pipe for the idea
                    .pipe(replace(/(\/\/ replace:next:)(.*)([\n\r])(.*)/g, '$2'))
                    // this replace need to be repeated until there is no match anymore
                    //.pipe(replace(/(\/\/ replace:dist[\s\S]*)(dist\/)([\s\S]*\/\/ endreplace:dist)/g, '$1$3'))
                    .pipe(gulp.dest('prod/'));

                callback();

            })
            .catch(function (err) {
                console.log('error during main module build');
                console.log(err);
                callback();
            });
    });

});

gulp.task('index-process', function () {
    gulp.src(paths.index)
        .pipe(processhtml())
        .pipe(gulp.dest('prod/'));
});

gulp.task('prod:dependencies', function () {
    gulp.src(paths.jspm)
        .pipe(gulp.dest('prod/jspm_packages/'));

    gulp.src(paths.config)
        .pipe(gulp.dest('prod/config/'));
});
