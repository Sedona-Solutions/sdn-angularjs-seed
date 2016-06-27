var gulp = require('gulp');
var karma = require('karma');
var gulp_protractor = require("gulp-protractor");
var paths = require('../paths');
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

gulp.task('test', ['build'], function (done) {
    new karma.Server({
        configFile: __dirname + '/../../test/karma.conf.js',
        singleRun: true
    }, (exitCode) => {
        console.log(exitCode);
        done();
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

gulp.task('webdriver-update', gulp_protractor.webdriver_update);
gulp.task('webdriver-standalone', ['webdriver-update'], gulp_protractor.webdriver_standalone);
