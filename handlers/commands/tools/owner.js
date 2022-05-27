
let fs = require('fs')
module.exports = {
    tags: ['others', 'information'],
    cmd: ['owner', 'creator'],
    help: ['owner'],
    exec: (m, client) => {
  const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2022,
                            status: 1,
                            surface : 1,
                            message: 'developer catzy', //Kasih namalu
                            orderTitle: 'Bang',
                            thumbnail: fs.readFileSync('./src/log.png'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }


const kon = {
  "displayName": "2 contacts",
  "contacts": [
    {
      "displayName": "Fauzan",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fauzan;;;\nFN:Fauzan\nitem1.TEL;waid=12342337336:+1 (234) 233-7336\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
    },
    {
      "displayName": "Ilham Skhzyi",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Skhzyi;Ilham;;;\nFN:Ilham Skhzyi\nORG:Ilham Skhyzi\nTITLE:\nitem1.TEL;waid=6287773710155:+62 877-7371-0155\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
    }
  ]
}
client.sendMessage(m.chat, { 
	contacts: kon
}, { quoted: ftroli })
}
}
