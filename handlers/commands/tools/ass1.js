module.exports = {
    tags: ['testing'],
    startsWith: ['Assllamualikum','asslamualikum','Assalamualaikum','assalamualaikum','mikum'],
    exec: (m, client, { args }) => {
        m.reply(args.join('Waalikumsallam wr.wb'))
    }
}
