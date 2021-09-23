let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
	let res = await fetch(global.API('lolhum', '/api/random/neko', {}, 'apikey'))
	m.reply(global.wait)
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    conn.sendButtonImg(m.chat, await(img), 'Ichi ni san Nyaan~', watermark, '⏩Get Again', `${usedPrefix}neko`, m)
	}

handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^(neko)$/i


module.exports = handler