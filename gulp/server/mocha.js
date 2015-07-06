var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

var watching = false;

gulp.task('server:mocha:watch', function() {
  watching = true;
  gulp.watch('server/**/*.js', ['server:mocha']);
});

gulp.task('server:mocha', ['server:jshint'], function() {
  process.env.NODE_ENV = 'test';

  return gulp.src('server/**/*.spec.js', {read: false})
    .pipe(mocha())
    .once('error', handleError)
    .once('end', handleEnd);
});

var handleError = function(err) {
  gutil.log();
  return (watching) ? this.emit('end') : process.exit(1);
};

var handleEnd = function() {
  return (watching) ? this.emit('end') : process.exit();
};
