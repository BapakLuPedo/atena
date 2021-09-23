let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let er = `
┌〔 Gacha Nsfw 〕
├ waifu
├ neko
├ loli
├ chiisaihentai
├ trap
├ yaoi
├ ecchi
├ hentai
├ ahegao
├ hololewd
├ sideoppai
├ animefeets
├ animebooty
├ animethighss
├ hentaiparadise
├ animearmpits
├ hentaifemdom
├ lewdanimegirls
├ biganimetiddies
├ animebellybutton
├ hentai4everyone
└────

example:
${usedPrefix + command} ecchi
    `.trim()
	if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
                case 'waifu':
        	case 'neko':
        	case 'loli':
        	case 'chiisaihentai':
                case 'trap':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
		let res = await fetch(global.API('lolhum', '/api/random/nsfw/' + args[0].toLowerCase(), {}, 'apikey'))
		await m.reply(global.wait)
			if (!res.ok) throw await res.text()
			let img = await res.buffer()
			if (!img) throw img
				conn.sendButtonImg(m.chat, await(img), 'Hayoo ngapain gosok hp ke tytyd', watermark, '💦Ngocok Lagi', `${usedPrefix}nsfwgacha ` + args[0].toLowerCase(), m)
            	break
        default:
            throw er
    }
}
handler.help = ['nsfwgacha'].map(v => v + ' <teks>')
handler.tags = ['gacha']
handler.command = /^nsfwgacha$/i

handler.nsfw = true
handler.limit = true

module.exports = handler
//Credit: By KhaelSan
