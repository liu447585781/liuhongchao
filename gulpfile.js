var gulp = require('gulp');
var sass = require('gulp-sass');
var mincss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var url = require('url');
var path = require('path');

//编译scss  压缩css
gulp.task('devcss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(mincss())
        .pipe(gulp.dest('./src/css'))
})

//监听devcss
gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('devcss'))
})

//压缩js
gulp.task('minjs', function() {
    return gulp.src(['./src/js/**/*.js', '!./src/js/libs/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./src/minjs'))
})

//开发环境
gulp.task('dev', gulp.series('devcss', 'minjs', 'watch'))