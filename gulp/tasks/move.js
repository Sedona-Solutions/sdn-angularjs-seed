var gulp = require('gulp');
var paths = require('../paths');

gulp.task('move', function () {
  var srcPaths = [
    './src/**/*.json',
    './src/**/*.svg',
    './src/**/*.woff',
    './src/**/*.ttf',
    './src/**/*.png',
    './src/**/*.ico',
    './src/**/*.jpg',
    './src/**/*.gif',
    './src/**/*.eot',
    './app/index.html',
    './app/system.config.js'
  ];

    gulp.src('./app/libs/**/*')
    .pipe(gulp.dest(`${paths.output}libs`));

    gulp.src('./app/config/*')
    .pipe(gulp.dest(`${paths.output}config`));
    
  return gulp.src(srcPaths)
    .pipe(gulp.dest(paths.output))
});
