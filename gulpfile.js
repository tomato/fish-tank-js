'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var requireDir = require('require-dir');
var tasks = requireDir('./gulp');

gulp.task('watch', ['server:build:watch', 'client:build:watch']);

gulp.task('test', function() {
  return runSequence('client:test', 'server:test');
});
