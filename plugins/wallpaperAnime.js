const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    let res = await fetch(global.API('xteam', '/randomimage/wpmobile', {}, 'APIKEY'))
    if (!res.ok) throw eror
    let img = await res.buffer()
    if (!img) throw img
    conn.sendButtonImg(m.chat, 'Nih Wallpapernya wibu..', img, watermark, '⏩Get Again', '.wpanime')
}
handler.help = ['wallpaperanime']
handler.tags = ['internet']
handler.command = /^(wallpaper|wp)anime$/i
handler.limit = true

module.exports = handler
