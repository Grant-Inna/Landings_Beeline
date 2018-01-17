const gulp = require('gulp'),
    smartGrid = require('smart-grid'),
    less = require('gulp-less'),
    base64 = require('gulp-base64-inline'),
    groupMedia = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    rename = require("gulp-rename"),
    browserSync = require("browser-sync").create(),
    sourcemaps = require("gulp-sourcemaps"),
    notify = require("gulp-notify");





gulp.task('CSS1', function() {
    return gulp.src( '01/dev/style.less' )
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({ browsers: ['last 5 versions', '> 2%'] }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '01/' ))
        .pipe(notify('CSS1 Success!'));
});


gulp.task('CSS2', function() {
    return gulp.src( '02/dev/style.less' )
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({ browsers: ['last 5 versions', '> 2%'] }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '02/' ))
        .pipe(notify('CSS2 Success!'));
});


gulp.task('CSS3', function() {
    return gulp.src( '03/dev/style.less' )
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({ browsers: ['last 5 versions', '> 2%'] }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '03/' ))
        .pipe(notify('CSS3 Success!'));
});


gulp.task('CSS4', function() {
    return gulp.src( '04/dev/style.less' )
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({ browsers: ['last 5 versions', '> 2%'] }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '04/' ))
        .pipe(notify('CSS4 Success!'));
});


gulp.task('CSS5', function() {
    return gulp.src( '05/dev/style.less' )
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({ browsers: ['last 5 versions', '> 2%'] }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '05/' ))
        .pipe(notify('CSS5 Success!'));
});



gulp.task('CSS6', function() {
    return gulp.src( '06/dev/style.less' )
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({ browsers: ['last 5 versions', '> 2%'] }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '06/' ))
        .pipe(notify('CSS6 Success!'));
});


gulp.task('CSS7', function() {
    return gulp.src( '07/dev/style.less' )
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({ browsers: ['last 5 versions', '> 2%'] }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '07/' ))
        .pipe(notify('CSS7 Success!'));
});


gulp.task('CSS8', function() {
    return gulp.src( '08/dev/style.less' )
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({ browsers: ['last 5 versions', '> 2%'] }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '08/' ))
        .pipe(notify('CSS8 Success!'));
});


gulp.task('CSS9', function() {
    return gulp.src( '09/dev/style.less' )
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({ browsers: ['last 5 versions', '> 2%'] }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '09/' ))
        .pipe(notify('CSS9 Success!'));
});


gulp.task('CSS10', function() {
    return gulp.src( '10/dev/style.less' )
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({ browsers: ['last 5 versions', '> 2%'] }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '10/' ))
        .pipe(notify('CSS10 Success!'));
});


gulp.task('smartGrid', function() {
    var options = {
        offset: "0",
        columns: "10",
        mobileFirst: true,
        container: {
            maxWidth: "850px",
            fields: "0"
        },
        breakPoints: {
            lg: {
                width: '800px'
            },
            md: {
                width: '730px'
            },
            sm: {
                width: '660px'
            },
            xsm: {
                width: '560px'
            },
            xs: {
                width: '410px'
            },
            xxs: {
                width: '370px'
            },
            tiny: {
                width: '310px'
            }
        }
    };
    smartGrid( './', options);
});



gulp.task( 'watch__common', function() {
    gulp.watch([ 'media.less', 'media-xs-c-outside.less' ], all);
});


gulp.task( 'watch__all', function() {
    gulp.watch([ 'media.less', '_var.less', 'media-xs-c-outside.less', allSRC ], all);
});

var all = [ 'CSS1', 'CSS2', 'CSS3', 'CSS4', 'CSS5', 'CSS6', 'CSS7', 'CSS8', 'CSS9', 'CSS10' ];
var allSRC = './**/dev/style.less';
var allW = [ 'CSS1', 'CSS2', 'CSS3', 'CSS4', 'CSS5', 'CSS6', 'CSS7', 'CSS8', 'CSS9', 'CSS10', 'watch__common' ];
var allSrcTask = [ 'CSS1', 'CSS2', 'CSS3', 'CSS4', 'CSS5', 'CSS6', 'CSS7', 'CSS8', 'CSS9', 'CSS10', 'watch__common', 'watch__all' ];

gulp.task( 'default1', allW );
gulp.task( 'default', allSrcTask );




