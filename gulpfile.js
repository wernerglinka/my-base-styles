/* jslint */

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var shell       = require('gulp-shell');
var sourcemaps  = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    "use strict";
    return gulp.src('base-styles/base-styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({style: 'expanded'}))
        .pipe(prefix('last 2 version'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('demo'));
});

// having sass as a dependency for the refresh task insures that they are executed before browerSync is run
// reference: browsersync.io/docs/gulp
gulp.task("refresh", ["sass"], function (done) {
    "use strict";
    browserSync.reload();
    done();
});

// the gulp default task starts browserSync and the watch task
gulp.task("default", ["sass"], function () {
    "use strict";
    browserSync.init({
        server: {
            baseDir: "demo"
        },
        open: false
    });

    gulp.watch(['base-styles/*.scss', 'demo/index.html'], ['refresh']);
});