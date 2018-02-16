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

/*

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

*/
gulp.task('CSS8', function() {
    return gulp.src( '08/dev/style.less' )
        .pipe(less())
        .pipe(base64())
        .pipe(groupMedia())
        .pipe(autoprefixer({ browsers: ['last 5 versions', '> 2%'] }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest( '08/' ))
        .pipe(notify('CSS8 Success!'));
});
/*

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
*/

var HTMLdir = [ 'jade-order1', 'jade-order2', 'jade-order3' ]; //, 'jade-order4', 'jade-order5', 'jade-order6', 'jade-order7', 'jade-order8' 'jade-order9', 'jade-order10'


gulp.task('jade-order1', function() {
    return gulp.src( '1/dev/index.jade' )
        .pipe( jade())
        .pipe( rename( 'order.html' ))
        .pipe( gulp.dest( '1/' ))
        .pipe( inlinesource())
        .pipe( gulp.dest( '1/' ));
});

gulp.task('jade-order2', function() {
    return gulp.src( '2/dev/index.jade' )
        .pipe( jade())
        .pipe( rename( 'order.html' ))
        .pipe( gulp.dest( '2/' ))
        .pipe( inlinesource())
        .pipe( gulp.dest( '2/' ));
});

gulp.task('jade-order3', function() {
    return gulp.src( '3/dev/index.jade' )
        .pipe( jade())
        .pipe( rename( 'order.html' ))
        .pipe( gulp.dest( '3/' ))
        .pipe( inlinesource())
        .pipe( gulp.dest( '3/' ));
});


/*
gulp.task( 'jade-order4', function() {
    return gulp.src( '4/index.html' )
        .pipe( rename( 'order.html' ))
        .pipe( gulp.dest( '4/' ));
});

gulp.task( 'jade-order5', function() {
    return gulp.src( '5/index.html' )
        .pipe( rename( 'order.html' ))
        .pipe( gulp.dest( '5/' ));
});

gulp.task( 'jade-order6', function() {
    return gulp.src( '6/index.html' )
        .pipe( rename( 'order.html' ))
        .pipe( gulp.dest( '6/' ));
});
gulp.task( 'jade-order7', function() {
    return gulp.src( '7/index.html' )
        .pipe( rename( 'order.html' ))
        .pipe( gulp.dest( '7/' ));
});
*/
gulp.task( 'jade-order8', function() {
    return gulp.src( '08/dev/index.jade' )
        .pipe( jade())
        .pipe( rename( 'order.html' ))
        .pipe( gulp.dest( '08/' ))
        .pipe( inlinesource())
        .pipe( gulp.dest( '08/' ));
});
/*
gulp.task( 'jade-order9', function() {
    return gulp.src( '9/index.html' )
        .pipe( rename( 'order.html' ))
        .pipe( gulp.dest( '9/' ));
});
gulp.task( 'jade-order10', function() {
    return gulp.src( '10/index.html' )
        .pipe( rename( 'order.html' ))
        .pipe( gulp.dest( '10/' ));
});*/




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



gulp.task( 'watch__common', function() {
    gulp.watch([ 'common.less' ], all); //'media.less', 'media-xs-c-outside.less'
});


gulp.task( 'watch__all', function() {
    gulp.watch([ 'common.less', 'var.less', allSRC ], all);
});

var all = [ 'CSS1', 'CSS2', 'CSS3'];
var allSRC = './**/dev/style.less';
var allW = [ 'CSS1', 'CSS2', 'CSS3', 'CSS4', 'CSS5', 'CSS6', 'CSS7', 'CSS8', 'CSS9', 'CSS10', 'watch__common' ];
var allSrcTask = [ 'CSS1', 'CSS2', 'CSS3', 'CSS4', 'CSS5', 'CSS6', 'CSS7', 'CSS8', 'CSS9', 'CSS10', 'watch__all' ];

gulp.task( 'default1', all );
gulp.task( 'default2', allSrcTask );
gulp.task( 'default', HTMLdir );



