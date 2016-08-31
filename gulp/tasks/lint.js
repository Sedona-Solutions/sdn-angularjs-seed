var gulp = require('gulp');
var eslint = require('gulp-eslint');
var htmlhint = require('gulp-htmlhint');
var paths = require('../paths');

// js and html code validation
gulp.task('lint', ['lint:js','lint:html']);

// js validation thanks to eslint
gulp.task('lint:js', function () {
  return gulp.src(paths.source)
    .pipe(eslint())
    .pipe(eslint.format());
});

// html validation thanks to htmlhint
gulp.task('lint:html', function () {
  return gulp.src(paths.templates)
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter());
});

