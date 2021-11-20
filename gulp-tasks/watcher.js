export const watcher = () => {
    $.gulp.watch($.pug().watch, $.tasks.pug).on('all', $.server.reload)
}