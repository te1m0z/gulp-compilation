export const settings = {
    pug: {
        pretty: true,
        onErr: (err) => ({ title: 'Pug', message: err.message, sound: 'Beep' })
    }
}