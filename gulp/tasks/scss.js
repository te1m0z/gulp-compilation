import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import autoprefixer from 'gulp-autoprefixer'

const sass = gulpSass(dartSass)

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: true })
    .pipe(app.plugins.replace('@gulp_imgs/', '../img/'))
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(
      autoprefixer({
        grid: true,
        cascade: true,
      })
    )
    .pipe(groupCssMediaQueries())
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream())
}
