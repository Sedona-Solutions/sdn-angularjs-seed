var gulp = require('gulp');
var karma = require('karma');
var gulp_protractor = require("gulp-protractor");
var paths = require('../paths');
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

// run the unit tests thanks to karma
// cf. https://github.com/karma-runner/gulp-karma
gulp.task('test', ['build'], function (done) {
    new karma.Server({
        configFile: __dirname + '/../../test/karma.conf.js',
        singleRun: true
    }, (exitCode) => {
        console.log('Karma has exited with ' + exitCode);
        if (exitCode !== 0) {
            process.exit(exitCode);
        } else {
            done();
        }
    }).start();
});

gulp.task('test:remap', ['test'], function (done) {
    return gulp.src(paths.coverage + '/coverage-final.json')
        .pipe(remapIstanbul({
            reports: {
                'json': paths.coverage + '/coverage.json',
                'html': paths.coverage + '/html-remaped/'
            },
            fail: true,
            useAbsolutePaths: true
        }));
});

// run e2e tests thanks to protractor
// this tasks need a running selenium server (cf. the 'webdriver-standalone' task)
// cf. https://github.com/mllrsohn/gulp-protractor
gulp.task('sauce-test', function (done) {
    gulp.src(paths.tests)
        .pipe((gulp_protractor.protractor({
            configFile: __dirname + '/../../test/protractor.conf.js'
        }))
        .on('error', function (e) {
            throw e;
        })
        .on('end', done));
});

// update the selenium local install thanks to gulp-protractor
gulp.task('webdriver-update', gulp_protractor.webdriver_update);

// run a standalone instance of the local selenium server thanks to gulp-protractor
// another solution could be to let Protractor handle it automatically
// cf. https://github.com/mllrsohn/gulp-protractor#protractor-webdriver
gulp.task('webdriver-standalone', ['webdriver-update'], gulp_protractor.webdriver_standalone);
