let handler = m => m
handler.before = m => {
  let user = global.db.data.users[m.sender]
  if (user.afk > -1) {
    conn.send2Button(m.chat, `
You quit AFK mode${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afk)}
`.trim(), watermark, 'MENU', '.menu', 'PROFILE', '.profile', m)
    user.afk = -1
    user.afkReason = ''
  }
  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  for (let jid of jids) {
    let user = global.db.data.users[jid]
    if (!user) continue
    let afkTime = user.afk
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    m.reply(`
Don't tag him!
He's in AFK mode ${reason ? 'reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
  }
  return true
}

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
