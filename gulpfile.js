var gulp = require('gulp'),
    seajsCombo = require('gulp-seajs-combo'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minicss = require('gulp-clean-css'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    assetRev = require('gulp-asset-rev');

gulp.task('combo', function(){
	gulp.src( './main.js')
	    .pipe(seajsCombo())
	    .pipe(uglify())
	    .pipe(concat('main.min.js'))
	    .pipe(gulp.dest('./dist/'))
	    .pipe(livereload())
}); 

gulp.task('minicss', function(){
    gulp.src(['./css/*.css'])
        .pipe(concat('all.min.css'))
        .pipe(minicss())
        .pipe(gulp.dest('./dist/'))
        .pipe(livereload())
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch(['./js/*.js', '!./main.min.js'], ['combo']);
	gulp.watch(['./css/*.css', '!./css/all.min.css'], ['minicss']);
	watch('./music/*.html').pipe(livereload())
});

gulp.task('default', ['combo', 'minicss', 'watch']); 