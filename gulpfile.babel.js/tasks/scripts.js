import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'

export const scripts = () => {
    return $.gulp.src($.path.js.src, { sourcemaps: true })
        .pipe(plumber({
            errorHandler: notify.onError(err => ({
                title: 'JavaScript',
                message: err.message,
                sound: 'Beep'
            }))
        }))
        .pipe(babel())
        .pipe(uglify())
        .pipe($.gulp.dest($.path.js.dest, { sourcemaps: true }))
}

export const js_libs = () => {
    return $.gulp.src($.path.js_libs.src)
        .pipe($.gulp.dest($.path.js_libs.dest))
}