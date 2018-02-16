var gulp = require('gulp'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    base64 = require('gulp-base64-inline'),
    groupMedia = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    rename = require("gulp-rename"),
    browserSync = require("browser-sync").create(),
    sourcemaps = require("gulp-sourcemaps"),
    copy = require('copy'),
    notify = require("gulp-notify");


gulp.task( 'browser', function() {
    browserSync.init({
        server: {
            baseDir: '../'
        }
    });
});

gulp.task('imageMIN', function() {
    return gulp.src( 'images/*.{png,jpg,jpeg,svg}' )
        .pipe(imagemin())
        .pipe(gulp.dest( './images/' ))
        .pipe(notify('Images Compress Success!'));
});


gulp.task('CSS', function() {
    return gulp.src( 'style.less' )
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '../' ))
        .pipe(notify('CSS Success!'));
});


gulp.task('watch_CSS', ['browser'], function() {
    gulp.watch('*.less', ['CSS']);
    gulp.watch('*.less').on('change', browserSync.reload)
});


gulp.task('watch_imageMIN', function() {
    gulp.watch('images/*.{png,jpg,jpeg,svg}', ['imageMIN']);
    gulp.watch('images/*.{png,jpg,jpeg,svg}').on('change', browserSync.reload)
});

gulp.task('default', ['jade', 'CSS', 'watch_CSS', 'imageMIN']);
gulp.task('images', ['imageMIN', 'watch_imageMIN']);



gulp.task('jade', function() {
    return gulp.src( 'index.jade' )
        .pipe(jade())
        .pipe(rename( 'order.html' ))
        .pipe(gulp.dest( '../' ));
});

