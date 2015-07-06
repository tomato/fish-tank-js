var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('server:nodemon', function(cb) {
  var called = false;
  return nodemon({
    script: 'server/app.js',
    watch: ['server/**/*.js']
  })
  .on('start', function onStart() {
    // ensure start only gets called once
    if (!called) { cb(); }
    called = true;
  })
  .on('restart', function onRestart() {
    // reload connected browsers after a slight delay
    setTimeout(function reload() {
      browserSync.reload({
        stream: false
      });
    }, BROWSER_SYNC_RELOAD_DELAY);
  });
});
