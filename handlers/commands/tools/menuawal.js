
module.exports = {
    tags: ['others', 'information'],
    cmd: ['infobot', 'infobot'],
    help: ['info'],
    exec: (m, client, { prefix }) => {

const btn = [
            
           
            { urlButton: { displayText: `Group Me `, url: `https://chat.whatsapp.com/G0QgvIganFuIZWG5GBkQBv` } },
 { urlButton:
{ displayText: `Github Me `, url: `https://github.com/Satria356` } },
 { urlButton:
{ displayText: `Developer `, url: `developer atau pengembang bot https://wa.me/+6283811034750` } },
             { quickReplyButton: {displayText: 'SPEED-TEST', id: '.ping '}},
{ quickReplyButton: {displayText: 'MENU-LIST', id: '.allmenu'}}
        ]
        client.sendMessage(m.chat, { 
			caption: `FAR-MD
━━━━━━━━━━━━
› *INFO BOT*
Bot name : Farbot-Md
Type bot : Multi Device
Owner name : Fardev78
Bot version : 0.5.1
Contact Me : https://wa.me/+6283811034750
⌜ Farbot-Multi-device ⌟`, 
			footer, 
			templateButtons: btn,
			image: {url: 'https://telegra.ph/file/06e5276a64a401b755676.jpg'}
		}, { quoted: m })
}
}
