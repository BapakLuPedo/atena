let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix }) => {

	let res = await fetch(global.API('lolhum', '/api/random/waifu', {}, 'apikey'))

	if (!res.ok) throw await res.text()

	let img = await res.buffer()

	if (!img) throw img

		conn.sendButtonImg(m.chat, await(await fetch(img)).buffer(), 'Nih waifu nya', watermark, '⏩Get Again', `${usedPrefix}waifu`, m)

	}

handler.help = ['waifu']

handler.tags = ['internet']

handler.command = /^(waifu)$/i



module.exports = handler
