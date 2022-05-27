module.exports = {
    tags: ['others', 'information'],
    cmd: ['donasi', 'donasi'],
    help: ['donasi'],
    exec: (m, client, { prefix }) => {
      
 const btn = [
            
            { urlButton: { displayText: `DANA`, url: ` 6283811034750` } },
            { urlButton: { displayText: `GOPAY`, url: `6283168004413 ` } },
            { urlButton: { displayText: `PULSA `, url: `6283811034750` } },
        ]
        client.sendMessage(m.chat, { 
			caption: `Kalian bisa mendukung saya agar bot ini tetap up to date dengan

𝘿𝙊𝙉𝘼𝙎𝙄 𝙑𝙄𝘼 •
❒ 𝙂𝙊𝙋𝘼𝙔
❒ 𝘿𝘼𝙉𝘼
❒ 𝙋𝙃𝙊𝙉𝙀𝙉𝙐𝙈𝘽𝙀𝙍
❒ 𝙉𝙀𝙓𝙏 → 𝙆𝙇𝙄𝙆 𝘽𝙐𝙏𝙏𝙊𝙉 𝙐𝙍𝙇`, 
			footer, 
			templateButtons: btn,
			image: {url: 'https://telegra.ph/file/bcd9669f3b7efda08602d.jpg'}
		}, { quoted: m })
}}
