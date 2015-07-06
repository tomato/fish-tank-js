var gulp = require('gulp');
var runSequence = require('run-sequence');
var requireDir = require('require-dir');
var server = requireDir('./server');

gulp.task('server:test', ['server:mocha']);
gulp.task('server:test:watch', ['server:mocha:watch']);

gulp.task('server:build:watch', ['server:nodemon']);
