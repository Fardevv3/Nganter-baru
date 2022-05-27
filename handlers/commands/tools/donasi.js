module.exports = {
    tags: ['others', 'information'],
    cmd: ['donasi', 'donasi'],
    help: ['donasi'],
    exec: (m, client, { prefix }) => {
      
 const btn = [
            
            { urlButton: { displayText: `𝘿𝘼𝙉𝘼`, url: ` https://link.dana.id/qr/5hf4vyfw` } },
            { urlButton: { displayText: `𝙂𝙊𝙋𝘼𝙔`, url: `QR gopay silahkan scan untuk mengakses ` } },
            { urlButton: { displayText: `𝙋𝙐𝙇𝙎𝘼 `, url: `http://wa.me/+628773710155` } },
        ]
        client.sendMessage(m.chat, { 
			caption: `Kalian bisa mendukung saya agar bot ini tetap up to date dengan

𝘿𝙊𝙉𝘼𝙎𝙄 𝙑𝙄𝘼 •
➥ 𝙂𝙊𝙋𝘼𝙔
➥ 𝘿𝘼𝙉𝘼
➥ 𝙋𝙃𝙊𝙉𝙀𝙉𝙐𝙈𝘽𝙀𝙍
❍ 𝙉𝙀𝙓𝙏 → 𝙆𝙇𝙄𝙆 𝘽𝙐𝙏𝙏𝙊𝙉 𝙐𝙍𝙇`, 
			footer, 
			templateButtons: btn,
			image: {url: 'https://telegra.ph/file/3775b11fedf471914d3de.jpg'}
		}, { quoted: m })
}}
