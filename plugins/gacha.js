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
├ elaina
├ kanna
├ shinobu
├ megumin
├ art
├ wallnime
└────

┌〔 List Gacha-Nsfw 〕
├ 
├ 
├ 
├ 
├ 
├ 
├ 
├ 
├ 
├ 
└────

example:
${usedPrefix + command} elf
    `.trim()
		if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
    	/*Gacha time*/
        case 'waifu':
        case 'husbu':
        case 'neko':
        case 'loli':
        case 'elf':
        case 'shota':
        case 'sagiri':
        case 'kanna':
        case 'elaina': /*wangy wangy hu ha hu ha🥵*/
        case 'shinobu':
        case 'megumin':
        case 'art':
        case 'wallnime':
		let res = await fetch(global.API('lolhum', '/api/random/' + args[0].toLowerCase(), {}, 'apikey'))
		m.reply(global.wait)
			if (!res.ok) throw await res.text()
			let img = await res.buffer()
			if (!img) throw img
			conn.sendButtonImg(m.chat, await(img), 'Nih ' + args[0].toLowerCase() + ' nya', watermark, '⏩Get Again', `${usedPrefix}gacha ` + args[0].toLowerCase(), m)
            break
		/*Horny time*/
				case 'chiisaihentai':
				case 'trap':
                case 'blowjob':
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
		if(!handler.nsfw === true ) return m.reply('「❗」 *Fitur Nsfw Mati*') // or if(handler.nsfw === false ) return m.reply('「❗」 *Fitur Nsfw Mati*')
			let res = await fetch(global.API('lolhum', '/api/random/nsfw/' + args[0].toLowerCase(), {}, 'apikey'))
			m.reply(global.wait)
				if (!res.ok) throw await res.text()
				let img = await res.buffer()
				if (!img) throw img
					conn.sendButtonImg(m.chat, await(img), 'Hayoo ngapain pegang tytyd', watermark, '💦Ngocok Lagi', `${usedPrefix}gacha ` + args[0].toLowerCase(), m)
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