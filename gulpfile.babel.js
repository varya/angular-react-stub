import gulp from 'gulp';

import jscs from 'gulp-jscs';

gulp.task('test', ['test:jscs']);

gulp.task('test:jscs', () => {
    gulp.src(['**/*.js', '!./node_modules'])
        .pipe(jscs())
        .pipe(jscs.reporter());
});
