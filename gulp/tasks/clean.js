var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');

// delete temporary files
gulp.task('clean', function () {
  return gulp.src([paths.target])
    .pipe(vinylPaths(del));
});
