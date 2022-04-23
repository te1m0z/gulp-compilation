import fileInclude from 'gulp-file-include'

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(fileInclude())
    .pipe(app.plugins.replace('@gulp_imgs/', 'img/'))
    .pipe(app.gulp.dest(app.path.build.html))
}
