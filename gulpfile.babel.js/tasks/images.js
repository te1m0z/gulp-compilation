import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import imagemin from 'gulp-imagemin'
import newer from 'gulp-newer'

export const images = () => {
    return $.gulp.src($.path.img.src)
        .pipe(plumber({
            errorHandler: notify.onError(err => ({
                title: 'Images',
                message: err.message,
                sound: 'Beep'
            }))
        }))
        .pipe(newer($.path.img.dest))
        .pipe(imagemin($.pluginOptions.imagemin))
        .pipe($.gulp.dest($.path.img.dest))
}