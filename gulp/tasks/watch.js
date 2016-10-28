var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

// log informations about a changed file before running the related tasks
function changed(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// build the project for testings
gulp.task('watch:build', function (callback) {
    return runSequence(
        'build',
        'index-process:serve',
        callback
    )
});

// build the project a first time, for development purpouse, and keep watching on changes on the source files
// all change on a source file will re-run the related build task, and, if needed, reload the http server
gulp.task('watch', ['watch:build'], function () {
  gulp.watch([ paths.source ], [ 'es6', 'lint:js:dontfail', browserSync.reload ]).on('change', changed);
  gulp.watch([ paths.systemConfig, paths.config, paths.jspm ], [ 'move', browserSync.reload ]).on('change', changed);
  gulp.watch([ paths.html ], [ 'html', 'lint:html', browserSync.reload ]).on('change', changed);
  gulp.watch([ paths.sass ], [ 'sass' ]).on('change', changed);
});
