var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch'),
    jshint = require('gulp-jshint');

gulp.task('html', function() {
    return gulp.src('Jade/*.jade')
        .pipe(plumber())
        .pipe(watch())
        .pipe(jade())
        .pipe(gulp.dest('www'))
});

gulp.task('css', function() {
    return gulp.src('www/css/**/*.scss')
        .pipe(watch())
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('www/css'))
});

gulp.task('js', function() {
    return gulp.src('www/js/**/*.js')
        .pipe(watch())
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('dev', ['html', 'css', 'js'], function() {});
