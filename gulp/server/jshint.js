var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('server:jshint', function() {
  return gulp.src(['server/**/*.spec.js','server/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
