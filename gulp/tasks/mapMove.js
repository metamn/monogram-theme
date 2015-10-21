// Map Move
//
// - move maps to destination
//
// Styleguide mapMove

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError');


// Configuration
var paths = require('./../config');


// Task for moving map files to /dist
gulp.task('mapMove', function() {
  return gulp.src(paths.map_src + paths.map_extensions)
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(paths.map_dest))
});
