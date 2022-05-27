module.exports = {
    tags: ['testing'],
    cmd: ['tes', 'p'],
    help: ['tes'],
    exec: (m) => {
          const fliveLoc2 = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "title": "ANTIBOT","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./src/nganu.jpg')}}
	}


client.sendMessage(m.chat, {text: 'Bot sudah onn!!'}, {quoted:fliveLoc2})
    }
}
