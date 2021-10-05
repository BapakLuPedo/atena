let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, command, args }) => {
    if (!args[0]) throw `Masukkan query.\nContoh: ${usedPrefix + command} atena san`
    let res = await fetch(global.API('lolhum', '/api/ytplay', { query: args[0] }, 'apikey'))
    if (!res.ok) throw err
    if (!res.ok) throw await res.text()
    let json = await res.json()
    m.reply(global.wait)
    let thumbnail = await(await fetch(`${json.result.info.thumbnail}`)).buffer()
    let atena = `
*〔YT PLAY v2〕*
*Title:* ${json.result.info.title}
*MP3 filesize:* ${json.result.audio.size}
*MP4 filesize:* ${json.result.video.size}
`.trim()
    if (!args[1]) await conn.send2ButtonLoc(m.chat, await(await fetch(`${json.result.info.thumbnail}`)).buffer(), atena, watermark, 'Audio', `.play ${args[0]} audio`, 'Video', `.play ${args[0]} video`, m)
    if (args[1] === 'audio') {
        m.reply(global.wait)
        await conn.sendFile(m.chat, `${json.result.audio.link}`, 'audio.mp3', '', m)
    } else if (args[1] === 'video') {
        m.reply(global.wait)
        await conn.sendFile(m.chat, `${json.result.video.link}`, 'video.mp4', '', m, 0, { thumbnail })
    }
}
handler.command = /^play2$/i
handler.tags = ['downloader']
handler.help = ['play2'].map(v => v + ' <query>')
module.exports = handler

handler.exp = 0