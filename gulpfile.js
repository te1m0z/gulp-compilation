const { src, dest, watch, parallel } = require('gulp');
const browserSync                    = require('browser-sync').create(); // обновление браузера
const concat                         = require('gulp-concat'); // объеденение файлов
const uglify                         = require('gulp-uglify'); // js
const sass                           = require('gulp-sass'); // scss
const autoprefixer                   = require('gulp-autoprefixer');
const imagemin                       = require('gulp-imagemin');

// Открытие в браузере
function browsersync() {

    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    })
}

function images() {

    return src('app/images/**/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(dest('dist/images'))
}

function scripts() {

    return src([
        'app/js/main.js',
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify()) // сжатие js
    .pipe(dest('app/js'))
    .pipe(browserSync.stream()) // обновление в браузере
}


// SCSS компилятор
function styles() {

    return src([
        'app/scss/styles.scss'
    ])
    .pipe(sass({ outputStyle: 'compressed' })) //expanded для красивого вида
    .pipe(concat('styles.min.css')) // объеденения неск. файлов в 1 // также js файлы
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 15 version'],
        grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream()) // обновление в браузере
}

// Авто-обновление при изменении scss, js, html
function watching() {

    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/main.js', '!app/js/main.min.js'], scripts); // перезагрузка при изменении js
    watch(['app/*.html']).on('change', browserSync.reload); // перезагрузка при изменении html
}


///////////////////////////////////////////
//////////////// BUILD ////////////////////
///////////////////////////////////////////

function build() {

    images();

    return src([
        'app/css/styles.min.css',
        'app/fonts/**/*',
        'app/*.html',
        'app/js/main.min.js'
    ], { base: 'app' })
    .pipe(dest('dist'))
}


exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;

exports.build = build;
exports.images = images;

exports.default = parallel(styles, scripts, browsersync, watching);