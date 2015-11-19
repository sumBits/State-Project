var gulp = require('gulp');
//var del = require('del');
//var uglify = require('gulp-uglify');
// var minifyCss = require('gulp-minify-css');
// var imagemin = require('gulp-imagemin');
// var pngquant  = require('imagemin-pngquant');
// var htmlmin = require('gulp-htmlmin');
var symdest = require('gulp-symdest');
var electron = require('gulp-atom-electron');
var zip = require('gulp-vinyl-zip');


gulp.task('Minify Index', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('Minify Templates', function() {
    return gulp.src('*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
});

gulp.task('Minify Images', function() {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant({speed: 1})]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('Minify Css', function() {
  return gulp.src('*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('Uglify Javascript', function() {
  return gulp.src('js/*.js')
    .pipe(uglify({
    	mangle: false
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('buildwin', function() {
  return gulp.src('*')
    .pipe(electron({ version: '0.34.1', platform: 'darwin' }))
    .pipe(zip.dest('app-darwin.zip'));
});

// gulp.task('default', function() {
//   console.log("Welcome to gulp! what would you like to do?");
//   console.log("Build desktop app: gulp build windows, gulp build linux, gulp build darwin, or if you'd like gulp build all");
//   console.log("Run tests: gulp test");
//   console.log("fdlksa");
// });

// gulp.task('build all', ['build windows', 'build linux', 'build darwin'])
