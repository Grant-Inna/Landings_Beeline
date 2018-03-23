const gulp = require('gulp'),
    smartGrid = require('smart-grid'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    base64 = require('gulp-base64-inline'),
    groupMedia = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    rename = require("gulp-rename"),
    inlinesource = require('gulp-inline-source'),
    browserSync = require("browser-sync").create(),
    notify = require("gulp-notify");




var all = [ 'CSS1', 'CSS2', 'CSS3'];

gulp.task('CSS1', function() {
    return gulp.src( '1/dev/style.less' )
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({ browsers: ['last 5 versions', '> 2%'] }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest( '1/' ))
        .pipe(notify('CSS1 Success!'));
});


gulp.task('CSS2', function() {
    return gulp.src( '2/dev/style.less' )
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({ browsers: ['last 5 versions', '> 2%'] }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest( '2/' ))
        .pipe(notify('CSS2 Success!'));
});


gulp.task('CSS3', function() {
    return gulp.src( '3/dev/style.less' )
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({ browsers: ['last 5 versions', '> 2%'] }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest( '3/' ))
        .pipe(notify('CSS3 Success!'));
});


var HTMLdir = [ 'jade-order1', 'jade-order2', 'jade-order3' ];

gulp.task('jade-order1', function() {
    return gulp.src( '1/dev/index.jade' )
        .pipe( jade())
        .pipe( gulp.dest( '1/' ))
        .pipe( rename( 'order.html' ))
        .pipe( gulp.dest( '1/' ))
        .pipe( inlinesource())
        .pipe( gulp.dest( '1/' ));
});

gulp.task('jade-order2', function() {
    return gulp.src( '2/dev/index.jade' )
        .pipe( jade())
        .pipe( gulp.dest( '2/' ))
        .pipe( rename( 'order.html' ))
        .pipe( gulp.dest( '2/' ))
        .pipe( inlinesource())
        .pipe( gulp.dest( '2/' ));
});

gulp.task('jade-order3', function() {
    return gulp.src( '3/dev/index.jade' )
        .pipe( jade())
        .pipe( gulp.dest( '3/' ))
        .pipe( rename( 'order.html' ))
        .pipe( gulp.dest( '3/' ))
        .pipe( inlinesource())
        .pipe( gulp.dest( '3/' ));
});



gulp.task( 'styles', all );
gulp.task( 'default', HTMLdir );




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
                width: '359px'
            },
            tiny: {
                width: '310px'
            }
        }
    };
    smartGrid( './', options);
});
