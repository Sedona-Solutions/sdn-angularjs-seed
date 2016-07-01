var gulp = require('gulp');
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('serve', ['watch'], function (done) {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: ['target/tmp/'],
      middleware: [ historyApiFallback() ]
    }
  }, done);
});

gulp.task('serve:prod', ['release'], function (done) {
    browserSync({
        open: false,
        port: 9001,
        server: {
            baseDir: ['target/dist/']
        }
    }, done);
});