let fetch = require('node-fetch')
let moment = require('moment-timezone')
let handler = async (m, { conn }) => {
    const chats = conn.chats.all()
    const groups = chats.filter(v => v.jid.endsWith('g.us'))
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

	let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
	let atena = 'https://telegra.ph/file/d87d256f3dda141d87db0.jpg'
    await conn.send2ButtonLoc(m.chat, await(await fetch(atena)).buffer(), `
┌─〔 %me 〕
├ ${ucapan()} %name! 👋
├ Have a nice day
│
├ Tanggal: %week, %date
├ Waktu: %time
├ Runtime: %uptime
└────
    `.trim(), watermark, 'List Menu', '.?list', 'Owner', '.owner')
}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = /^(menu|help)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Good Midnight"
  if (time >= 4) {
    res = "Good Morning"
  }
  if (time > 10) {
    res = "Good Afternoon"
  }
  if (time >= 15) {
    res = "Good Evening"
  }
  if (time >= 18) {
    res = "Good Night"
  }
  return res
}