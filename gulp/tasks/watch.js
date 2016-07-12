var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

function changed(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['build'], function () {
  gulp.watch([ paths.source ], [ 'es6', 'lint:js', browserSync.reload ]).on('change', changed);
  gulp.watch([ paths.systemConfig, paths.config, paths.jspm ], [ 'move', browserSync.reload ]).on('change', changed);
  gulp.watch([ paths.html ], [ 'html', 'lint:html', browserSync.reload ]).on('change', changed);
  gulp.watch([ paths.less ], [ 'less' ]).on('change', changed);
});
