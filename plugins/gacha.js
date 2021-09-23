let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let er = `
┌〔 List Gacha 〕
├ waifu
├ husbu
├ neko
├ loli
├ elf
├ shota
├ sagiri
├ shinobu
├ megumin
├ wallnime
└────

example:
${usedPrefix + command} elf
    `.trim()
		if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
        case 'waifu':
        case 'husbu':
        case 'neko':
        case 'loli':
        case 'elf':
        case 'shota':
        case 'sagiri':
        case 'shinobu':
        case 'megumin':
        case 'wallnime':
		let res = await fetch(global.API('lolhum', '/api/random/' + args[0].toLowerCase(), {}, 'apikey'))
		m.reply(global.wait)
			if (!res.ok) throw await res.text()
			let img = await res.buffer()
			if (!img) throw img
				conn.sendButtonImg(m.chat, await(img), 'Nih ' + args[0].toLowerCase() + ' nya', watermark, '⏩Get Again', `${usedPrefix}gacha ` + args[0].toLowerCase(), m)
            break
        default:
            throw er
    }
}
handler.help = ['gacha'].map(v => v + ' <teks>')
handler.tags = ['gacha']
handler.command = /^gacha$/i

handler.limit = true

module.exports = handler