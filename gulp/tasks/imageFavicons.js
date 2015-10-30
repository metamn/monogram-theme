// Image Favicon
//
// - move favicons to destination
//
// Styleguide imageFavicon

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError');


// Configuration
var paths = require('./../config');


// Task for moving image files for /site
gulp.task('imageFavicons', function() {
  return gulp.src(paths.favicons_src + paths.image_extensions)
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(paths.favicons_dest))
});
