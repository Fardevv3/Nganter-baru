
module.exports = {
    tags: ['others', 'information'],
    cmd: ['menu', 'menu'],
    help: ['menu'],
    exec: (m, client, { prefix }) => {

const btn = [
            
           
            { urlButton: { displayText: `𝙃𝙤𝙨𝙩𝙞𝙣𝙜 `, url: `https://jsrepos.com/lib/Ilhamskhyi-catzy` } },
 { urlButton:
{ displayText: `𝙂𝙞𝙩𝙝𝙪𝙗 `, url: `https://github.com/Ilhamskhyi` } },
 { urlButton:
{ displayText: `𝙙𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧 `, url: `developer atau pengembang bot https://wa.me/+6287773710155` } },
             { quickReplyButton: {displayText: '𝙛𝙖𝙨𝙩 𝙧𝙚𝙨𝙥𝙤𝙣𝙚 𝙗𝙤𝙩', id: '.ping '}},
{ quickReplyButton: {displayText: '𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙧 ', id: '.allmenu'}}
        ]
        client.sendMessage(m.chat, { 
			caption: `𝚌𝚊𝚝𝚣𝚢 - 𝚋𝚘𝚝 𝚖𝚞𝚕𝚝𝚒 𝚍𝚎𝚟𝚒𝚌𝚎
━━━━━━━━━━━━
◕ 𝑖𝑛𝑓𝑜𝑏𝑜𝑡

「version 0.5.1」
⌜ 𝚋𝚊𝚒𝚕𝚢𝚎𝚜 𝚕𝚊𝚝𝚎𝚜𝚝⁴⁰⁴ ⌟`, 
			footer, 
			templateButtons: btn,
			image: {url: 'https://telegra.ph/file/7b0e8623615268a38f2fe.jpg'}
		}, { quoted: m })
}
}
