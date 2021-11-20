import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import pugm from 'gulp-pug'

export const pug = () => {
    return $.gulp.src($.path.pug.src)
        .pipe(plumber({
            errorHandler: notify.onError(err => ({
                title: 'Pug',
                message: err.message,
                sound: 'Beep'
            }))
        }))
        .pipe(pugm($.pluginOptions.pug))
        .pipe($.gulp.dest($.path.pug.dest))
        .pipe($.server.stream())
}