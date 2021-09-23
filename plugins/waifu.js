let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
	let res = await fetch(global.API('lolhum', '/api/random/waifu', {}, 'apikey'))
	m.reply(global.wait)
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    conn.sendButtonImg(m.chat, await(img), 'Nih waifu nya', watermark, '⏩Get Again', `$waifu`, m)
	}

handler.help = ['waifu']
handler.tags = ['internet']
handler.command = /^(waifu)$/i


module.exports = handler