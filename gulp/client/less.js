var gulp = require('gulp');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var paths = require('./paths');

gulp.task('client:less', function(){
  gulp.src('client/styles/styles.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest(paths.output));
});
