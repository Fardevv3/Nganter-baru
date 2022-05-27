const { processTime } = require("../../../utils")
const fs = require('fs')
let mulai = fs.statSync('./src/start.txt')
const os = require('os')
let date = moment.duration(moment(moment()).diff(mulai))

module.exports = {
    tags: ['others', 'information'],
    cmd: ['ping', 'stat'],
    help: ['ping'],
    exec: (m, client, { prefix }) => {
      
        const btn = [
            { quickReplyButton: { displayText: `BACK TO MENU`, id: `${prefix}menu` } },
            
            { urlButton: { displayText: `Contact Me`, url: `https://wa.me/+6283811034750` } },
        ]

        client.sendMessage(m.chat, { caption: ` 「INFO-BOT」

⊳ Bot Status : Online
⊳ Latency : ${processTime(client.timestamp, moment())} _ms_
⊳ Bot Run Time : ${moment.duration(mulai.mtimeMs, 'milliseconds').humanize()}
⊳ System Up Time : ${moment.duration(os.uptime(), 'seconds').humanize()}
`, footer, templateButtons: btn, image: {url: 'https://telegra.ph/file/bcd9669f3b7efda08602d.jpg'}
		}, { quoted: m })
    }
}
