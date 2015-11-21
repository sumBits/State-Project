var gulp = require('gulp');
// npm install del gulp-cache gulp-uglify gulp-minify-css gulp-imagemin imagemin-pngquant gulp-htmlmin gulp-symdest gulp-atom-electron gulp-vinyl-zip gulp-concat-css --save-dev
var del = require('del');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var htmlmin = require('gulp-htmlmin');
var symdest = require('gulp-symdest');
var electron = require('gulp-atom-electron');
var zip = require('gulp-vinyl-zip');
var concat = require('gulp-concat');
var cache = require('gulp-cache');

gulp.task('Minify Index', function () {
    return gulp.src('website/src*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('website/builds/dist'))
});

gulp.task('Minify Templates', function () {
    return gulp.src('website/src/templates*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('website/builds/dist'))
});

gulp.task('Minify Images', function () {
    return gulp.src('website/src/styles/img/*')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant({speed: 1})]
        })))
        .pipe(gulp.dest('website/builds/dist/styles/img'));
});

gulp.task('Minify Css', function () {
    return gulp.src('*.css')
        .pipe(concatCss('styles.css'))
        .pipe(minifyCss({compatibility: 'ie10'}))
        .pipe(gulp.dest('website/builds/dist/styles'));
});

gulp.task('Javascript', function () {
    return gulp.src('website/src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('website/builds/dist/js'));
});

gulp.task('build darwin', function () {
    return gulp.src('website/src/*')
        .pipe(electron({version: '0.35.0', platform: 'darwin', token: 'ee7c50a38bf4f6c45988ce658a832ffa89a99978'}))
        .pipe(zip.dest('website/builds/scrollOn-darwin.zip'));
});
gulp.task('build windows', function () {
    return gulp.src('website/src/*')
        .pipe(electron({version: '0.35.0', platform: 'win32', token: 'ee7c50a38bf4f6c45988ce658a832ffa89a99978'}))
        .pipe(zip.dest('website/builds/scrollOn-windows.zip'));
});

gulp.task('build linux', function () {
    return gulp.src('website/src/*')
        .pipe(electron({version: '0.35.0', platform: 'linux', token: 'ee7c50a38bf4f6c45988ce658a832ffa89a99978'}))
        .pipe(zip.dest('website/builds/scrollOn-linux.zip'));
});

gulp.task('default', function () {
    console.log("Welcome to gulp! what would you like to do?");
    console.log("Build desktop app: gulp buildwindows, gulp buildlinux, gulp builddarwin, or if you'd like gulp buildall");
    console.log("Run compression: gulp compress");
    console.log("fdlksa");
});

gulp.task('buildall', ['buildwindows', 'buildlinux', 'builddarwin']);
gulp.task('compress', ['Minify Index', 'Minify Templates', 'Minify Images', 'Javascript', 'Minify Css']);