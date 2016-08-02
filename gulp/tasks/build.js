var gulp = require('gulp');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');
var htmlMin = require('gulp-minify-html');
var ngHtml2Js = require("gulp-ng-html2js");
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');

var paths = require('../paths');

var fs = require('fs');
var compilerOptions = JSON.parse(fs.readFileSync('.babelrc'));

gulp.task('build', function (callback) {
    return runSequence(
        'clean',
        ['sass', 'html', 'es6', 'move'],
        callback
    );
});


gulp.task('es6', function () {
    return gulp.src(paths.source, {base: 'app'})
        .pipe(plumber())
        .pipe(changed(paths.output, {extension: '.js'}))
        .pipe(sourcemaps.init())
        .pipe(babel(compilerOptions))
        .pipe(ngAnnotate({
            sourceMap: true,
            gulpWarnings: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.output))
});

gulp.task('html', function () {
    return gulp.src(paths.templates)
        .pipe(plumber())
        .pipe(changed(paths.output, {extension: '.html'}))
        .pipe(htmlMin({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            template: "import angular from 'angular';\n" +
            "export default angular.module('<%= moduleName %>', []).run(['$templateCache', function($templateCache) {\n" +
            "   $templateCache.put('<%= template.url %>',\n    '<%= template.prettyEscapedContent %>');\n" +
            "}]);\n"
        }))
        .pipe(babel(compilerOptions))
        .pipe(gulp.dest(paths.output))
});

gulp.task('sass', function () {
    return gulp.src(paths.sass)
        .pipe(plumber())
        .pipe(changed(paths.output, {extension: '.css'}))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(paths.output))
        .pipe(browserSync.reload({stream: true}));
});
