export const watcher = () => {
    $.gulp.watch($.path.pug.watch, $.tasks.pug).on('all', $.server.reload)
    $.gulp.watch($.path.sass.watch, $.tasks.sass).on('all', $.server.reload)
    $.gulp.watch($.path.js.watch, $.tasks.scripts).on('all', $.server.reload)
    $.gulp.watch($.path.img.watch, $.tasks.images).on('all', $.server.reload)
}