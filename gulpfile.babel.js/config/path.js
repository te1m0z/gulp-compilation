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
        src: pathSrc + '/resources/sass/index.{scss,sass}',
        watch: pathSrc + '/resources/sass/**/*.{scss,sass}',
        dest: pathDest + '/css/'
    },
    js: {
        src: [
            pathSrc + '/resources/js/*.js',
            '!' + pathSrc + '/resources/js/lib/**/*.*'
        ],
        watch: pathSrc + '/resources/js/**/*.js',
        dest: pathDest + '/js/'
    },
    img: {
        src: pathSrc + '/resources/img/**/*.{png,jpg,jpeg,svg}',
        watch: pathSrc + '/resources/img/**/*.*',
        dest: pathDest + '/img/'
    }
}