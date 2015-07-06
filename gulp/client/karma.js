var gulp = require('gulp');
var karma = require('karma').server;

var karmaOptions = {
  configFile: __dirname +  '/../../karma.conf.js'
};

gulp.task('client:karma', function(done) {
  karmaOptions.singleRun = true;
  karma.start(karmaOptions, done);
});

gulp.task('client:karma:watch', function(done) {
  karma.start(karmaOptions, done);
});
