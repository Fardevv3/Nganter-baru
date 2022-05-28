
module.exports = {
    tags: ['others', 'information'],
    cmd: ['menu', 'menu'],
    help: ['menu'],
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
Hai kak untuk menampilkan List menu Bot
silahkan klik button menu di bawah ya

› 𝑖𝑛𝑓𝑜𝑏𝑜𝑡
「version 0.5.1」
⌜ 𝚋𝚊𝚒𝚕𝚢𝚎𝚜 𝚕𝚊𝚝𝚎𝚜𝚝⁴⁰⁴ ⌟`, 
			footer, 
			templateButtons: btn,
			image: {url: 'https://telegra.ph/file/bcd9669f3b7efda08602d.jpg'}
		}, { quoted: m })
}
}
