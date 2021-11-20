import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import prefixer from 'gulp-autoprefixer'
import shorthand from 'gulp-shorthand'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import size from 'gulp-size'
import rename from 'gulp-rename'
import csso from 'gulp-csso'
import gulpSass from 'gulp-sass'
import sassCompiler from 'sass'
const toSass = gulpSass(sassCompiler)

export const sass =  () => {
    return $.gulp.src($.path.sass.src, { sourcemaps: true })
        .pipe(plumber({
            errorHandler: notify.onError(err => ({
                title: 'Sass',
                message: err.message,
                sound: 'Beep'
            }))
        }))
        .pipe(toSass())
        .pipe(prefixer())
        .pipe(shorthand())
        .pipe(groupCssMediaQueries())
        .pipe(size({ title: 'index.css' }))
        .pipe($.gulp.dest($.path.sass.dest, { sourcemaps: true }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(csso())
        .pipe(size({ title: 'index.min.css' }))
        .pipe($.gulp.dest($.path.sass.dest, { sourcemaps: true }))
}