let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hai, ${ucapan()}

${user.banned ? 'kamu dibanned' : 'Saya adalah Bot Whatsapp. Jangan spam, yg ngemis kontak keturunan Ragil'}
`.trim(), watermark, user.banned ? 'Owner' : 'Menu', user.banned ? ',owner' : ',?', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Good MidNight"
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