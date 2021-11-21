// модули
import gulp from 'gulp'
import bs from 'browser-sync'
// галп таски
import * as tasks from './tasks/index.js'
// конфиг
import { options } from './config/options.js'
import { path } from './config/path.js'

// доступ к глобальным объектам сборки
global.$ = {
    gulp,
    tasks,
    options,
    path,
    server: bs.create(),
}

export const sass = tasks.sass
export const scripts = tasks.scripts
export const images = tasks.images

export const dev = gulp.series(
    tasks.clear,
    gulp.parallel(tasks.pug, tasks.sass, tasks.scripts),
    tasks.images,
    gulp.parallel(tasks.serve, tasks.watcher)
)