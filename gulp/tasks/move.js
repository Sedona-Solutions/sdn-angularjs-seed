var gulp = require('gulp');
var paths = require('../paths');

// copy assets, configuration files and libraries to a temprary location for the HTTP server 
gulp.task('move', ['move:libs', 'move:config', 'move:assets']);

gulp.task('move:libs', function () {
    return  gulp.src('./app/libs/**/*')
        .pipe(gulp.dest(`${paths.output}libs`));
});

gulp.task('move:config', function () {
    return gulp.src('./app/config/*')
        .pipe(gulp.dest(`${paths.output}config`));
});

gulp.task('move:assets', function () {
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

    return gulp.src(srcPaths)
        .pipe(gulp.dest(paths.output));
})
