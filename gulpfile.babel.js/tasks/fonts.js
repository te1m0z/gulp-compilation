import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import newer from 'gulp-newer'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'

export const fonts = () => {
    return $.gulp.src($.path.fonts.src)
        .pipe(plumber({
            errorHandler: notify.onError(err => ({
                title: 'Fonts',
                message: err.message,
            }))
        }))
        .pipe(newer($.path.fonts.dest))
        .pipe(fonter($.options.fonts))
        .pipe($.gulp.dest($.path.fonts.dest))
        .pipe(ttf2woff2())
        .pipe($.gulp.dest($.path.fonts.dest))
}