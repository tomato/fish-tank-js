var gulp = require('gulp');
var Builder = require('systemjs-builder');
var path = require('path');
var runSequence = require('run-sequence');

var modules = require('../../modules.conf');
var paths = require('./paths');

var compilerOptions = {
  modules: 'system',
  moduleIds: false,
  externalHelpers: true,
  comments: true,
  compact: false,
};

gulp.task('client:es6', function(done) {
  return runSequence(['client:es6:compile', 'client:es6:move'], done);
});

gulp.task('client:es6:compile', function () {
  var builder = new Builder();
  builder.loadConfig('./system.config.js')
  .then(function() {
    builder.config({
      baseURL: path.resolve('./'),
      babelOptions: compilerOptions,
      map: modules,
      sourceMaps: true
    });

    return builder.build('./client/app/main.js', './client/dist/app.js');
  })
  .then(function() {
    console.log('Build complete!');
  })
  .catch(function(err) {
    console.log('Build error');
    console.log(err);
  });
});

gulp.task('client:es6:move', function() {
  return gulp.src([
    'node_modules/systemjs/dist/system.js',
    'node_modules/es6-module-loader/dist/es6-module-loader.js',
    'node_modules/babel-core/external-helpers.js'
  ])
  .pipe(gulp.dest(paths.output));
});
