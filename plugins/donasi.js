let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi 〕
├ OVO - DANA - PULSA(CLOSED)
├ 082248192917
└────
`.trim(), watermark, '𝙾𝚆𝙽𝙴𝚁', '.owner', m)
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
