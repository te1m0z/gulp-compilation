export const options = {
    pug: {
        pretty: true,
        data: {
            news: require('../../pug-data/news.json')
        }
    },
    imagemin: {
        verbose: true
    },
    fonts: {
        formats: ['woff2', 'woff', 'ttf', 'eot']
    }
}