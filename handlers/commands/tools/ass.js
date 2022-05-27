module.exports = {
    tags: ['Assllamualikum'],
    startsWith: ['.'],
help: ['Assllamualikum'],
    exec: (m, client, { args }) => {
const btn = [
            
            { urlButton: { displayText: `Artinya`, url: `Arti Dari Waalaikumsalam warahmatullahi wabarakatuh yang berarti Dan semoga keselamatan dan rahmat Allah serta keberkahannya terlimpah juga kepada kalian` } },
            
        ]
        client.sendMessage(m.chat, { text: `waalaikumussalam wr.wb
`, footer, templateButtons: btn }, { quoted: m }
}
}
