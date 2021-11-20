import del from 'del'

export const clear = () => {
    return del($.path.root)
}