let fetch = require('node-fetch')

let handler = async (m, {conn, command, text, usedPrefix }) => {
	if(!text) throw `uhm.. cari anime apa?\n\nContoh:\n${usedPrefix + command} Tejina senpai`
	let res = await fetch(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=pemburuBansos&query=${text}`)
	let { title, thumbnail, japanese, genre, seasons, producers, type, status, total_episode, score, duration, released_on, link_dl } = res
			let img = await fetch(thumbnail)
			//if (!img) throw img
		//await m.reply(global.wait)
			if (!res.ok) throw await res.text()
					ini_txt = `*Title :* ${title}\n`
					ini_txt += `*Japanese :* ${japanese}\n`
					ini_txt += `*Genre :* ${genre}\n`
					ini_txt += `*Seasons :* ${seasons}\n`
					ini_txt += `*Producers :* ${producers}\n`
					ini_txt += `*Type :* ${type}\n`
					ini_txt += `*Status :* ${status}\n`
					ini_txt += `*Total Eps :* ${total_episode}\n`
					ini_txt += `*Score :* ${score}\n`
					ini_txt += `*Duration :* ${duration}\n`
					ini_txt += `*Released :* ${released_on}\n\n`
					ini_txt += `*Download :*`
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
  	              let caption = `*〔 Kusonime 〕*\n\n` + ini_txt + `\n\n❲ Follow ❳\nhttps://www.instagram.com/khaelll._/`
					m.reply(caption)
  			// conn.sendFile(m.chat, img, 'kuso.png', caption, m, 0, { thumbnail: await (await fetch(img)).buffer() })
}

handler.help = ['kusonime'].map(v => v + ' <query>')
handler.tags = ['weebs']
handler.command = /^(kusonime|kuso)$/i

handler.limit = true

module.exports = handler
//Credit: By KhaelSan
//follow https://www.instagram.com/khaelll._/