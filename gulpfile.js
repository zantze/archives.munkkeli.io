var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var paths = {
	less: ['./assets/less/*.less'],
	js: ['./assets/js/*.js', '!./assets/js/*.min.js'],
	jsMin: ['./assets/js/*.min.js']
};

gulp.task('less', function() {
  return gulp.src(paths.less)
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(rename(function (path) {
	    path.extname = '.min.css'
	  }))
    .pipe(gulp.dest('./cdn/css'));
});

gulp.task('js', function() {
  return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(rename(function (path) {
	    path.extname = '.min.js'
	  }))
    .pipe(gulp.dest('./cdn/js'));
});

gulp.task('jsMin', function() {
  return gulp.src(paths.jsMin)
  	.pipe(concat('plugins.min.js'))
    .pipe(gulp.dest('./cdn/js'));
});

gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['less', 'js', 'jsMin']);