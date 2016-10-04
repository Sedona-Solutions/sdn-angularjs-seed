var gulp = require('gulp');
var eslint = require('gulp-eslint');
var htmlhint = require('gulp-htmlhint');
var paths = require('../paths');
var SonarWebReporters = require("sonar-web-frontend-reporters");
var fs = require('fs');
var npmConfig = JSON.parse(fs.readFileSync('./package.json'));

var projectName = npmConfig.name;

// js and html code validation
gulp.task('lint', ['lint:js','lint:html']);

// js validation thanks to eslint
gulp.task('lint:js', function () {
  return gulp.src(paths.source)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:js:dontfail', function () {
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

// generate lint reports for SonarQube
gulp.task('lint:sonar', function() {
    return SonarWebReporters.launchReporters({
        project: projectName, //your project's name
        css : false, //activate css linter with default values
        scss : false, //activate scss linter with default values
        // html linter configuration
        html : {
          src: 'app/src/**/*.html',
          task: 'lint:html',
          linter: htmlhint,
          report: 'target/reports/htmlhint.json'
        }, 
        js : false, //activate js linter with default values
        // js (eslint) linter configuration
        eslint : {
          src: 'app/src/**/*.js',
          task: 'lint:js:dontfail',
          base: 'app/src',
          linter: eslint,
          report: 'target/reports/eslint.json'
        }, 
        eslint_angular: false, //activate ESLint for Angular with default values
        ts : false //activate tslint with default values
    });
});

