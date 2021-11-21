import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import pugm from 'gulp-pug'
import webpHtml from 'gulp-webp-html'

export const pug = () => {
    return $.gulp.src($.path.pug.src)
        .pipe(plumber({
            errorHandler: notify.onError(err => ({
                title: 'Pug',
                message: err.message,
                sound: 'Beep'
            }))
        }))
        .pipe(pugm($.options.pug))
        // .pipe(webpHtml())
        .pipe($.gulp.dest($.path.pug.dest))
}