var gulp = require('gulp'),
	gulpif = require('gulp-if'),
	multiDest = require('gulp-multi-dest');

gulp.task('copyMain', function () {
	gulp.src([
			'./src/*.{ico,png,txt}',
		])
	.pipe(gulp.dest('./dist/'));
	gulp.src([
			'./src/assets/js/vendor/*.js',
			'!./src/assets/js/vendor/mapplic.js'
		])
	.pipe(gulp.dest('./dist/assets/js/'));
	gulp.src([
			'./src/assets/fonts/{,*/}*.*',
		])
	.pipe(gulp.dest('./dist/assets/fonts/'));
	gulp.src([
			'./src/assets/img/icons/MapKeyIconPicker.controller.js',
		])
	.pipe(gulp.dest('./dist/assets/img/icons/'));
});

gulp.task('copyImages', function () {
	gulp.src([
			'./src/assets/img/src/**/*.*',
		])
	.pipe(gulp.dest('./dist/assets/img/src/'));
	gulp.src([
			'./src/assets/favicon/**/*.*',
		])
	.pipe(gulp.dest('./dist/assets/favicon/'));
	gulp.src([
			'./src/assets/img/logo/**/*.*',
		])
	.pipe(gulp.dest('./dist/assets/img/logo/'));
});

// Trigger manually
gulp.task('copyStatic', function () {
	gulp.src([
			'./dist/assets/fonts/lato-light-webfont.*',
		])
	.pipe(gulp.dest('./static/assets/fonts/'));
	gulp.src([
			'./dist/assets/fonts/lato-regular-webfont.*',
		])
	.pipe(gulp.dest('./static/assets/fonts/'));
});

 
 

gulp.task('copyAll', ['copyMain', 'copyImages', 'copyStatic']);

