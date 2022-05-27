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
            { quickReplyButton: { displayText: `↬𝙗𝙖𝙘𝙠 𝙩𝙤 𝙢𝙚𝙣𝙪`, id: `${prefix}menu` } },
            
            { urlButton: { displayText: `𝙋𝙝𝙤𝙣𝙚 𝙣𝙪𝙢𝙗𝙚𝙧`, url: `https://wa.me/+6287773710155` } },
        ]

        client.sendMessage(m.chat, { caption: ` 「𝙱𝚘𝚝 𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚝𝚒𝚘𝚗」

⊳ Bot Status : Online
⊳ Latency : ${processTime(client.timestamp, moment())} _ms_
⊳ Bot Run Time : ${moment.duration(mulai.mtimeMs, 'milliseconds').humanize()}
⊳ System Up Time : ${moment.duration(os.uptime(), 'seconds').humanize()}
`, footer, templateButtons: btn, image: {url: 'https://telegra.ph/file/37ef5da9806ee6ed01e08.jpg'}
		}, { quoted: m })
    }
}
