var gulp = require('gulp');
var eslint = require('gulp-eslint');
var htmlhint = require('gulp-htmlhint');
var paths = require('../paths');

gulp.task('lint', ['lint:js','lint:html']);

gulp.task('lint:js', function () {
  return gulp.src(paths.source)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:html', function () {
  return gulp.src(paths.templates)
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter());
});

