const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', () => {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/styles'));
});

gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss').on('change', function(event){
        gulp.start('styles');
    });
});

gulp.task('build', ['styles']);
