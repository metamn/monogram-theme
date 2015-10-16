// Video Move
//
// - move videos to destination
//
// Styleguide videoMove

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError');


// Configuration
var paths = require('./../config');


// Task for moving video files to /dist
gulp.task('videoMove', function() {
  return gulp.src(paths.video_src + paths.video_extensions)
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(paths.video_dest))
});
