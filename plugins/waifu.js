let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('lolhum', '/api/random/waifu', {}, 'APIKEY'))
  if (!res.ok) throw eror
  let img = await res.buffer()
  if (!img) throw img
  conn.sendButtonImg(m.chat, 'Nih Waifunya', img, watermark, '⏩Get Again', '.waifu')
}
handler.help = ['waifu']
handler.tags = ['internet']
handler.command = /^(waifu)$/i

module.exports = handler
