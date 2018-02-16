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
    inlinesource = require('gulp-inline-source'),
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
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
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

gulp.task('default', ['CSS', 'jade', 'watch_JADE', 'watch_CSS', 'imageMIN']);
gulp.task('images', ['imageMIN', 'watch_imageMIN']);


gulp.task('watch_JADE', ['browser'], function() {
    gulp.watch('index.jade', ['jade']);
    gulp.watch('index.jade').on('change', browserSync.reload)
});

gulp.task('jade', function() {
    return gulp.src( 'index.jade' )
        .pipe(jade())
        .pipe(gulp.dest( '../' ))
        .pipe( rename( 'order.html' ))
        .pipe( inlinesource())
        .pipe( gulp.dest( '../' ));
});

/*
gulp.task('jade-order', function() {
    return gulp.src( 'index.jade' )
        .pipe( jade())
        .pipe( rename( 'order.html' ))
        .pipe( gulp.dest( '../' ))
        .pipe( inlinesource())
        .pipe( gulp.dest( '../' ));
});*/
