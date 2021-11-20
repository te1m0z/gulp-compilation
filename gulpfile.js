import gulp from 'gulp'
import bs from 'browser-sync'
import * as tasks from './gulp-tasks/index.js'
import { settings } from './config/settings.js'

global.$ = {
    gulp: gulp,
    path: {
        dist: './docs',
        src: './src'
    },
    server: bs.create(),
    tasks: tasks,
    settings: settings,
    pug: function () {
        return {
            src: this.path.src + '/pug/*.pug',
            watch: this.path.src + '/pug/**/*.pug'
        }
    }
}

export const dev = gulp.series(tasks.clear, tasks.pug, gulp.parallel(tasks.serve, tasks.watcher))