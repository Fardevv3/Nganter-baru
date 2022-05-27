
module.exports = {
    tags: ['others', 'information'],
    cmd: ['group', 'g'],
    help: ['group'],
    exec: (m, client, { prefix }) => {

 const btn = [
            
           
            { urlButton: { displayText: `group bot`, url: `https://cutt.ly/oAgN4cr` } },
             { quickReplyButton: {displayText: 'open', id: '.group open '}},
{ quickReplyButton: {displayText: 'close', id: '.group close'}}
        ]
        client.sendMessage(m.chat, { 
			caption: `_group setting change_

( open )/ membuka group 
( close )/ menutup group`, 
			footer, 
			templateButtons: btn,
			image: {url: 'https://telegra.ph/file/c5e5d12e7e23ec274bb67.jpg'}
		}, { quoted: m })
}
}
