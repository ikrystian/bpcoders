var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var htmlreplace = require('gulp-html-replace');

gulp.task('sass', function() {
    return gulp.src("./app/sass/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

gulp.task('replace', function() {
  gulp.src('./app/index.html')
    .pipe(htmlreplace({
        'css': 'styles.min.css',
        'js': 'js/bundle.min.js'
    }))
    .pipe(gulp.dest('build/'));
});


gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/sass/**/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});