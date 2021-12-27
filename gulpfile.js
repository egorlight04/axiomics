const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

// compiling pages
function pages() {
    return gulp.src('./source/*.html')
        .pipe(gulp.dest('./build'))
}

// compiling styles
function styles() {
    return gulp.src('./source/styles/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('styles.min.css'))
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest('./build/styles'))
}

// compiling scripts
function scripts() {
    return gulp.src('./source/scripts/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.min.js'))
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest('./build/scripts'))
}

// compiling images
function images() {
    return gulp.src('./source/images/**/*')
        .pipe(gulp.dest('./build/images'))
}

// compiling fonts
function fonts() {
    return gulp.src('./source/fonts/**/*')
        .pipe(gulp.dest('./build/fonts'))
}

exports.pages = pages;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.fonts = fonts;

exports.default = gulp.series(pages, styles, scripts, images, fonts);