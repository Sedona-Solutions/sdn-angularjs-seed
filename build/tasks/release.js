var gulp = require('gulp');
var insert = require('gulp-insert');
var runSequence = require('run-sequence');
var paths = require('../paths');
var Builder = require('systemjs-builder');
var fs = require('fs');
var path = require('path');

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function (file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory() && file != 'layout';
    });
}

gulp.task('release', function (callback) {
    return runSequence(
        'clean',
        'build',
        'bundle',
        callback
    );
});

gulp.task('bundle', function (callback) {
    var directories = getDirectories('dist/app');
    var modulesBuilder = new Builder('./', './system.config.js');
    var toExcludeFromMain = directories.map((moduleName) => {
        return `prod/app/${moduleName}.js`
    }).join(' - ');

    modulesBuilder.config({
        meta: {
            'jspm_packages/*': {build: false},
            'common/*': {build: false}
        }
    });

    var modulesPromises = directories.map((moduleName) => {
        var pathToDir = 'dist/app/' + moduleName + '/';
        var moduleFile = pathToDir + moduleName + '.component.js';

        return modulesBuilder.bundle(moduleFile, 'prod/app/' + moduleName + '.js', {minify: false, sourcemap: true})
            .then(function () {
                console.log(`${moduleName} build complete`);
            })
            .catch(function (err) {
                console.log(`error during ${moduleName} build`);
                console.log(err);
            });
    });

    Promise.all(modulesPromises).then(() => {
        var mainBuilder = new Builder('./', './system.config.js');

        mainBuilder.config({
            meta: {
                'jspm_packages/*': {build: false}
            }
        });

        mainBuilder.buildStatic(`app/main.js - ${toExcludeFromMain}`, 'prod/app/main.js', {
                minify: false,
                sourcemap: true,
                runtime: false
            })
            .then(function () {
                console.log('main module build complete');
                callback();
            })
            .catch(function (err) {
                console.log('error during main module build');
                console.log(err);
                callback();
            });
    });

});
