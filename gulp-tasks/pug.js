import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import pugm from 'gulp-pug'

export const pug = () => {
    return $.gulp.src($.pug().src)
        .pipe(plumber({ errorHandler: notify.onError($.settings.onErr) }))
        .pipe(pugm($.settings.pug))
        .pipe($.gulp.dest($.path.dist))
        .pipe($.server.stream())
}