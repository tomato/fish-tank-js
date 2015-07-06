var gulp = require('gulp');
var requireDir = require('require-dir');
var client = requireDir('./client');

gulp.task('client:test', ['client:karma']);
gulp.task('client:test:watch', ['client:karma:watch']);

gulp.task('client:build', ['client:es6', 'client:less']);
gulp.task('client:build:watch', function() {
  gulp.watch(client.paths.source, ['client:es6']);
  gulp.watch(client.paths.styles, ['client:less']);
});
