var input = 'app/sass/**/*.sass';
var output = 'app/css';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
	return gulp.src(input)
	.pipe(sass())
	.pipe(autoprefixer({
		browser: ['last 2 versions']
	}))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest(output))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: ''
		}
	})
});

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);

	//other watchers
});
