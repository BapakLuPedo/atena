let handler = async (m, { conn }) => {

	let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    
    	m.reply(`
┌─〔 Runtime 〕
├ Aktif selama ${uptime}
└────
	`.trim())
}

handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(runtime|uptime)?$/i

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}