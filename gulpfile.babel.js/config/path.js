const pathSrc = 'src'
const pathDest = 'docs'

export const path = {
    root: pathDest,
    pug: {
        src: pathSrc + '/pug/*.pug',
        watch: pathSrc + '/pug/**/*.pug',
        dest: pathDest
    },
    sass: {
        src: pathSrc + '/sass/index.{scss,sass}',
        watch: pathSrc + '/sass/**/*.{scss,sass}',
        dest: pathDest + '/css/'
    },
    js: {
        src: [
            pathSrc + '/js/*.js',
            '!' + pathSrc + '/js/lib/**/*.*'
        ],
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js/'
    },
    img: {
        src: pathSrc + '/img/**/*.{png,jpg,jpeg,svg}',
        watch: pathSrc + '/img/**/*.*',
        dest: pathDest + '/img/'
    },
    js_libs: {
        src: pathSrc + '/js/libs/**/*.*',
        watch: pathSrc + '/js/libs/**/*.*',
        dest: pathDest + '/js/libs/'
    },
    fonts: {
        src: pathSrc + '/fonts/**/*.{ttf,woff,woff2,eot}',
        watch: pathSrc + '/fonts/**/*.{ttf,woff,woff2,eot}',
        dest: pathDest + '/fonts/'
    }
}