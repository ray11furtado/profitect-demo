var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var runSeq = require('run-sequence');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('reload', function () {
    livereload.reload();
});

gulp.task('reloadCSS', function () {
    return gulp.src('./public/style.css').pipe(livereload());
});

gulp.task('buildCSS', function () {

    var sassCompilation = sass();
    sassCompilation.on('error', console.error.bind(console));

    return gulp.src('./browser/style/main.scss')
        .pipe(plumber({
            errorHandler: notify.onError('SASS processing failed! Check your gulp process.')
        }))
        .pipe(sourcemaps.init())
        .pipe(sassCompilation)
        .pipe(sourcemaps.write())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./public'));
});

gulp.task('build', function () {
    runSeq(['buildCSS']);
});

gulp.task('default', function () {

    gulp.start('build');

    // Run when anything inside of browser/scss changes.
    gulp.watch('browser/style/**', function () {
        runSeq('buildCSS', 'reloadCSS');
    });
});
