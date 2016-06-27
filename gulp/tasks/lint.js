var gulp = require('gulp');
var eslint = require('gulp-eslint');
var paths = require('../paths');

gulp.task('lint', function () {
  return gulp.src(paths.source)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint-nonblocking', function () {
  return gulp.src(paths.source)
    .pipe(eslint())
    .pipe(eslint.format());
});
