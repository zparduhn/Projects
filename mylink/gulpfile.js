'use strict';
var gulp = require('gulp'),
    styles = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    stripCode = require('gulp-strip-code'),
    ngAnnotate = require('gulp-ng-annotate'),
    watcher = gulp.watch(['./main/**/*.js', './main/styles/*.scss', './main/**/*.html'], ['default']);

  gulp.watch(['./main/**/*.js', './main/styles/*.scss', './main/**/*.html'], ['default']);

  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
  });

gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: 4000
	})
})

gulp.task('styles', function() { // .scss is newer file version of .sass
  gulp.src('./main/**/*.scss')
    .pipe(styles())// .pipe(stylus())
    .pipe(concat('styles.css'))// .pipe(uglifycss())
    .pipe(gulp.dest('./public/styles'))
});

gulp.task('javascript', function() {
  gulp.src(['./main/**/*.js'])
    .pipe(ngAnnotate())
    .pipe(concat('all.js'))// .pipe(uglify())
    .pipe(gulp.dest('./public/scripts'))
});

gulp.task('html', function() {
  gulp.src('./main/**/*.html')
    .pipe(gulp.dest('./public/html/'))// .pipe(htmlmin({collapseWhitespace: true}))
});

gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify'])
  gulp.watch('./sass/**/*.scss', ['sass']);
})

gulp.task('default', ['styles', 'javascript', 'html']);
