export const serve = () => {
    $.server.init({
        open: false,
        port: 5000,
        server: {
            baseDir: $.path.root,
            index: 'index.html'
        }
    })
}