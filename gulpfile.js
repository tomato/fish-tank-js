'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var requireDir = require('require-dir');
var tasks = requireDir('./gulp');

gulp.task('serve', ['server:build:watch', 'client:build:watch'], function() {
  browserSync.init({
    files: ['client/**/*.*'],
    proxy: 'http://localhost:9000',
    port: 4000,
    browser: ['google chrome']
  });
});

gulp.task('test', function() {
  return runSequence('client:test', 'server:test');
});
