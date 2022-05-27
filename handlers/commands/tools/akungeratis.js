module.exports = {
    tags: ['others', 'information'],
    cmd: ['akungratis', 'akungratis'],
    help: ['akungratis'],
    exec: (m, client, { prefix }) => {
      
   const btn = [
              
             { quickReplyButton: { displayText: `mobile legends`, id: `${prefix}ml` } },
             { quickReplyButton: { displayText: `free fire`, id: `${prefix}ff` } },
{ quickReplyButton: { displayText: `pubg`, id: `${prefix}pubg` } }
            

        ]
        client.sendMessage(m.chat, { 
			caption: `akun gratis game dari
 [ FAR-MD ]

*VIA LOGIN*
gmail
nomor handphone
username
paswrod

update tools => ilham - skhyzi`, 
			footer, 
			templateButtons: btn,
			image: {url: 'https://telegra.ph/file/bcd9669f3b7efda08602d.jpg'}
		}, { quoted: m })


}}
