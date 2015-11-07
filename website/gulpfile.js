var gulp = require('gulp');

//delete files
//var del = require('del');

//javascript uglify
var uglify = require('gulp-uglify');

//minifiy css
var minifyCss = require('gulp-minify-css');

//minify images
var imagemin = require('gulp-imagemin');
var pngquant  = require('imagemin-pngquant');

//minifiy images
var htmlmin = require('gulp-htmlmin');

//tests for complextity doesn't work very well
//var complexity = require('gulp-complexity');

//minify index
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


//note slow only use when added more images
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


gulp.task('default', ['Uglify Javascript', 'Minify Css', 'Minify Index', 'Minify Templates']);
