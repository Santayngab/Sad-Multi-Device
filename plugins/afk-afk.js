import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { text }) => {
let name = m.pushName || conn.getName(m.sender)

let user = global.db.data.users[m.sender]
let wibu = `https://api.zacros.my.id/randomimg/loli`    
let thumb = await(await fetch(wibu)).buffer()
user.afk = + new Date
user.afkReason = text
 conn.sendButtonDoc(m.chat, `${conn.getName(m.sender)} Telah Afk${text ? ': ' + text : ''}`, wm, 'Jangan Ganggu Ya', 'Bilek', m,  { contextInfo: { externalAdReply: { showAdAttribution: true,
        mediaUrl: "https://www.instagram.com/p/Cf_VZGUPuwY/?igshid=YmMyMTA2M2Y=",
        mediaType: "VIDEO",
        description: "https://www.instagram.com/p/Cf_VZGUPuwY/?igshid=YmMyMTA2M2Y=", 
        title: 'Simple Bot Esm',
        body: wm,
        thumbnail: thumb,
        sourceUrl: sgc
    }
    } })
            }
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler
