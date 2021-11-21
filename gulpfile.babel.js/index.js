import gulp from 'gulp'
import bs from 'browser-sync'

import * as tasks from './tasks/index.js'
import { options } from './config/options.js'
import { path } from './config/path.js'

global.$ = {
    gulp,
    tasks,
    options,
    path,
    server: bs.create(),
}

export const fonts = tasks.fonts

export const dev = gulp.series(
    tasks.clear,
    gulp.parallel(
        tasks.pug,
        tasks.sass,
        tasks.scripts,
        tasks.js_libs,
        tasks.fonts
    ),
    tasks.images,
    gulp.parallel(tasks.serve, tasks.watcher)
)