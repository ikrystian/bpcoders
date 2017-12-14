var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var htmlreplace = require('gulp-html-replace');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var uglifycss = require('gulp-uglifycss');
var clean = require('gulp-clean');
var runSequence = require('run-sequence').use(gulp);
var postcss = require('gulp-postcss');
var uncss = require('postcss-uncss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var htmlmin = require('gulp-htmlmin');


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
        'css': 'css/all.css',
        'js': 'js/all.js'
    }))
    .pipe(gulp.dest('./temp'));
});

gulp.task('minify', function() {
  return gulp.src('./temp/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./build/'));
});

gulp.task('css', function() {
  return gulp.src([
    "./app/css/bootstrap.min.css",
    "./app/css/slider-pro.min.css",
    "./app/css/superfish.css",
    "./app/css/owl.carousel.min.css",
    "./app/css/slick.css",
    "./app/css/slick-theme.css",
    "./app/css/jquery.navgoco.css",
    "./app/css/style.css"
    ])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./temp/css'));
});

gulp.task('autoprefixer', function () {

    return gulp.src('./temp/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./temp/css/'));
});

gulp.task('move', function(){
    gulp.src('./app/images/**/*.*')
      .pipe(gulp.dest('./build/images'));

      gulp.src([
        './app/css/font-awesome.css',
        './app/css/themify-icons.css'
        ])
      .pipe(gulp.dest('./build/css/'));

      gulp.src('./app/fonts/**/*.*')
      .pipe(gulp.dest('./build/fonts'));

      gulp.src('./app/works/**/*.*')
      .pipe(gulp.dest('./build/works'));

})

gulp.task('js', function() {
  return gulp.src([
        "./app/js/jquery-2.2.4.min.js",
        "./app/js/superfish.min.js",
        "./app/js/jquery.sliderPro.min.js",
        "./app/js/bootstrap.min.js",
        "./app/js/jquery.matchHeight.js",
        "./app/js/masonry.pkgd.min.js",
        "./app/js/imagesloaded.pkgd.min.js",
        "./app/js/owl.carousel.min.js",
        "./app/js/jquery.validate.min.js",
        "./app/js/slick.min.js",
        "./app/js/jquery.navgoco.min.js",
        "./app/js/jquery.infinitescroll.min.js",
        "./app/js/flexslider/jquery.flexslider-min.js",
        "./app/js/jquery.isotope.min.js",
        "./app/js/portfolio.js",
        "./app/js/particles.min.js",
        "./app/js/stats.min.js",
        "./app/js/particles.js",
        "./app/js/custom.js",
        "./app/js/vivus.min.js"
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./temp/js'));
});

gulp.task('compress-js', function () {
  pump([
        gulp.src(['./temp/**/*.js']),
        uglify(),
        gulp.dest('./build')
    ]
  );
});


gulp.task('compress-css', function () {
  gulp.src('./temp/**/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('clean', function () {
    return gulp.src(['./temp'], {read: false})
        .pipe(clean());
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/sass/**/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('build', function() {
  runSequence('replace', 'sass', 'css', 'autoprefixer', 'js', 'compress-css', 'compress-js', 'minify', 'move');
});
