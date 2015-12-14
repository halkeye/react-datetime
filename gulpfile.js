var gulp = require('gulp');
var webpack = require('webpack-stream');
var uglifyPlugin = require('webpack').optimize.UglifyJsPlugin;

var packageName = 'react-datetime';

var build = function(filename, minify) {
	var config = require('./webpack.config.js');
  config.output.filename = filename + '.js';
  if (minify) {
    config.plugins.push(new uglifyPlugin());
  }
  return gulp.src('./DateTime.js')
    .pipe( webpack( config ) )
    .pipe( gulp.dest('dist/') );
};

gulp.task('build:dev', function( callback ) {
  return build(packageName, false);
});

gulp.task('build:min', function( callback ) {
  return build(packageName + '.min',true);
});

gulp.task( 'build', ['build:dev', 'build:min'] );
gulp.task( 'default', ['build'] );
