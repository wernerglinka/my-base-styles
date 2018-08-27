/* jslint */

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var shell       = require('gulp-shell');
var sourcemaps  = require('gulp-sourcemaps');

gulp.task('sass', function () {
    "use strict";
    return gulp.src('base-styles/base-styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({style: 'expanded'}))
        .pipe(prefix('last 2 version'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('demo'));
});

gulp.task('watch', function () {
    "use strict";
    gulp.watch(['base-styles/*.scss'], ['sass']);
});

gulp.task('default', ['sass', 'watch']);

