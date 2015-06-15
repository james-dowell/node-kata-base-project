var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var config = {
  src: './.tmp',
}

var files = [
  './helpers.js',
  config.src + '/*.js',
  config.src + '/*.spec.js',
  config.src + '/**/*.js',
];

gulp.task('test', ['es6'], function () {

    return gulp.src(files, {read: false})
        .pipe($.mocha({
            reporter: 'nyan'
        }));

});

gulp.task('test:auto', ['test', 'es6'], function (done) {

    gulp.task('test:watch', ['test', 'es6']);
    gulp.watch(files, ['test:watch']);

});

gulp.task('es6', function () {

    return gulp.src('app/**/*.js')
        .pipe($.babel())
        .pipe(gulp.dest('.tmp'));
});
