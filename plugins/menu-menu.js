import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
* HELOU ✨${name}✨, 𝙴𝚂𝚃𝙴 𝙴𝚂 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾 𝙳𝙴 𝚃𝙷𝙴  𝑨 𝑹 𝑬 𝑺 ³³³ - 𝙱𝙾𝚃 🕷️⃟⃥✞︎⸸³³³*

*📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*

*💤 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*

*⚡ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}*

════════════════════════ ×㊄㊅㊆× ════════════════════════

*<𝕁𝕌𝔼𝔾𝕆𝕊/>*
EJEMPLO:
.PUTO @IXXI
°══•>>_${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
°══•>>_${usedPrefix}ppt *<papel / tijera /piedra>*_
°══•>>_${usedPrefix}prostituto *<nombre / @tag>*_
°══•>>_${usedPrefix}prostituta *<nombre / @tag>*_
°══•>>_${usedPrefix}gay2 *<nombre / @tag>*_
°══•>>_${usedPrefix}lesbiana *<nombre / @tag>*_
°══•>>_${usedPrefix}pajero *<nombre / @tag>*_
°══•>>_${usedPrefix}pajera *<nombre / @tag>*_
°══•>>_${usedPrefix}puto *<nombre / @tag>*_
°══•>>_${usedPrefix}puta *<nombre / @tag>*_
°══•>>_${usedPrefix}manco *<nombre / @tag>*_
°══•>>_${usedPrefix}manca *<nombre / @tag>*_
°══•>>_${usedPrefix}rata *<nombre / @tag>*_
°══•>>_${usedPrefix}love *<nombre / @tag>*_
°══•>>_${usedPrefix}doxear *<nombre / @tag>*_
°══•>>_${usedPrefix}pregunta *<texto>*_
°══•>>_${usedPrefix}simi *<texto>*_
°══•>>_${usedPrefix}topgays_
°══•>>_${usedPrefix}topotakus_
°══•>>_${usedPrefix}formarpareja_
°══•>>_${usedPrefix}verdad_
°══•>>_${usedPrefix}reto_

◈◐◈◐◈◐◈◐◈◐◈◐◈◈◐◈◐◈◐◈◐◈◐◈◐◈◈◐◈

*<𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ/>*

°══•>>_${usedPrefix}enable *welcome*_
°══•>>_${usedPrefix}disable *welcome*_
°══•>>_${usedPrefix}enable *modohorny*_
°══•>>_${usedPrefix}disable *modohorny*_
°══•>>_${usedPrefix}enable *antilink*_
°══•>>_${usedPrefix}disable *antilink*_
°══•>>_${usedPrefix}enable *antilink2*_
°══•>>_${usedPrefix}disable *antilink2*_
°══•>>_${usedPrefix}enable *detect*_
°══•>>_${usedPrefix}disable *detect*_
°══•>>_${usedPrefix}enable *audios*_
°══•>>_${usedPrefix}disable *audios*_
°══•>>_${usedPrefix}enable *autosticker*_
°══•>>_${usedPrefix}disable *autosticker*_

*<ℝ𝔼ℙ𝕆ℝ𝕋𝔼𝕊 𝔻𝔼 𝔽𝔸𝕃𝕃𝕆𝕊/>*

° ඬ⃟🔰 _${usedPrefix}reporte *<texto>*_

*<𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊/>*

°══•>>_${usedPrefix}facebook *<enlace / link / url>*_
°══•>>_${usedPrefix}instagram *<enlace / link / url>*_
°══•>>_${usedPrefix}mediafire *<enlace / link / url>*_
°══•>>_${usedPrefix}instagram *<enlace / link / url>*_
°══•>>_${usedPrefix}gitclone *<enlace / link / url>*_
°══•>>_${usedPrefix}tiktok *<enlace / link / url>*_
°══•>>_${usedPrefix}ytmp3 *<enlace / link / url>*_
°══•>>_${usedPrefix}ytmp4 *<enlace / link / url>*_
°══•>>_${usedPrefix}play.1 *<texto / enlace / link / url>*_
°══•>>_${usedPrefix}play.2 *<texto / enlace / link / url>*_
°══•>>_${usedPrefix}play *<texto>*_
°══•>>_${usedPrefix}spotify *<texto>*_
°══•>>_${usedPrefix}imagen *<texto>*_
°══•>>_${usedPrefix}pinteret *<texto>*_
°══•>>_${usedPrefix}wallpaper *<texto>*_
°══•>>_${usedPrefix}wallpaper2 *<texto>*_
°══•>>_${usedPrefix}pptiktok *<nombre de usuario>*_
°══•>>_${usedPrefix}igstalk *<nombre de usuario>*_
°══•>>_${usedPrefix}tiktokstalk *<nombre de usuario>*_

*<𝔾ℝ𝕌ℙ𝕆𝕊/>* 

°═•>> ${usedPrefix}add *<numero>*
°═•>> ${usedPrefix}kick *<@tag>*
°═•>> ${usedPrefix}grupo *<abrir / cerrar>*
°═•>> ${usedPrefix}promote *<@tag>*
°═•>> ${usedPrefix}demote *<@tag>*
°═•>> ${usedPrefix}banchat
°═•>> ${usedPrefix}unbanchat
°═•>> $admins *<texto>* (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
°═•>> ${usedPrefix}demote *<@tag>*
°═•>> ${usedPrefix}infogroup_
°═•>> ${usedPrefix}link_
°═•>> ${usedPrefix}setname *<texto>*
°═•>> ${usedPrefix}setdesc *<texto>*
°═•>> ${usedPrefix}invocar *<texto>*
°═•>> ${usedPrefix}hidetag *<texto>*
°═•>> ${usedPrefix}simular *<welcome / bye / promote / demote>*
•═════════∘═════════••═════════∘═════════•
*<ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊/>*🧧

°═•>> ${usedPrefix}toimg *<responde a un sticker>*
°═•>> ${usedPrefix}tomp3 *<responde a un video / nota de voz>*
°═•>>${usedPrefix}toptt *<responde a un video / audio>*
°═•>>  ${usedPrefix}tovideo *<responde a un audio>*
°═•>> ${usedPrefix}tourl *<responde a un video / imagen / audio>*
°═•>> ${usedPrefix}tts es *<texto>*
•═════════∘═════════••═════════∘═════════•
*<𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊/>*
°═•>> ${usedPrefix}logos *<efecto> <texto>*_
°═•>> ${usedPrefix}simpcard *<@tag>*_
°═•>> ${usedPrefix}hornycard *<@tag>*_
°═•>> ${usedPrefix}lolice *<@tag>*_
°═•>> ${usedPrefix}ytcomment *<texto>*_
°═•>> ${usedPrefix}itssostupid_
°═•>> ${usedPrefix}pixelar_
°═•>> ${usedPrefix}blur_
•═════════∘═════════••═════════∘═════════•
*<ℝ𝔸ℕ𝔻𝕆𝕄/>*👾
EJEMPLOS:
°═•>> ඬ⃟ _${usedPrefix}kurumi_
°═•>> ඬ⃟ _${usedPrefix}madara_
°═•>> ඬ⃟ _${usedPrefix}mikasa_
°═•>> ඬ⃟ _${usedPrefix}miku_
°═•>> ඬ⃟ _${usedPrefix}minato_
°═•>> ඬ⃟ _${usedPrefix}naruto_
°═•>> ඬ⃟ _${usedPrefix}nezuko_
°═•>> ඬ⃟ _${usedPrefix}cosplay_
•═════════∘═════════••═════════∘═════════•
*<𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊/>*
*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*

° ඬ⃟🎤 _${usedPrefix}bass_
° ඬ⃟🎤 _${usedPrefix}blown_
° ඬ⃟🎤 _${usedPrefix}deep_
° ඬ⃟🎤 _${usedPrefix}earrape_
° ඬ⃟🎤 _${usedPrefix}fast_
° ඬ⃟🎤 _${usedPrefix}fat_
° ඬ⃟🎤 _${usedPrefix}nightcore_
° ඬ⃟🎤 _${usedPrefix}reverse_
° ඬ⃟🎤 _${usedPrefix}robot_
° ඬ⃟🎤 _${usedPrefix}slow_
° ඬ⃟🎤 _${usedPrefix}smooth_
° ඬ⃟🎤 _${usedPrefix}tupai_
•═════════∘═════════••═════════∘═════════•
*<ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆/>*

° ඬ⃟📳 _${usedPrefix}start_
° ඬ⃟📳 _${usedPrefix}next_
° ඬ⃟📳 _${usedPrefix}leave_

*<𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊/>*

° ඬ⃟🔍 _${usedPrefix}animeinfo *<texto>*_
° ඬ⃟🔍 _${usedPrefix}google *<texto>*_
° ඬ⃟🔍 _${usedPrefix}letra *<texto>*_
° ඬ⃟🔍 _${usedPrefix}wikipedia *<texto>*_
° ඬ⃟🔍 _${usedPrefix}ytsearch *<texto>*_

*<𝔸𝕌𝔻𝕀𝕆𝕊/>* 
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_

° ඬ⃟🔊 _Quien es tu sempai botsito 7w7_
° ඬ⃟🔊 _Te diagnostico con gay_
° ඬ⃟🔊 _A nadie le importa_
° ඬ⃟🔊 _Fiesta del admin_
° ඬ⃟🔊 _Fiesta del administrador_ 
° ඬ⃟🔊 _Vivan los novios_
° ඬ⃟🔊 _Feliz cumpleaños_
° ඬ⃟🔊 _Noche de paz_
° ඬ⃟🔊 _Buenos dias_
° ඬ⃟🔊 _Buenos tardes_
° ඬ⃟🔊 _Buenos noches_
° ඬ⃟🔊 _Audio hentai_
° ඬ⃟🔊 _Chica lgante_
° ඬ⃟🔊 _Feliz navidad_
° ඬ⃟🔊 _Vete a la vrg_
° ඬ⃟🔊 _Pasa pack Bot_
° ඬ⃟🔊 _Atencion grupo_
° ඬ⃟🔊 _Marica quien_
° ඬ⃟🔊 _Murio el grupo_
° ඬ⃟🔊 _Oh me vengo_
° ඬ⃟🔊 _Viernes_
° ඬ⃟🔊 _Baneado_
° ඬ⃟🔊 _Sexo_
° ඬ⃟🔊 _Hola_
° ඬ⃟🔊 _Un pato_
° ඬ⃟🔊 _Nyanpasu_
° ඬ⃟🔊 _Te amo_
° ඬ⃟🔊 _Yamete_
° ඬ⃟🔊 _Bañate_
° ඬ⃟🔊 _Es puto_
° ඬ⃟🔊 _La biblia_
° ඬ⃟🔊 _Onichan_
° ඬ⃟🔊 _Mierda de Bot_
° ඬ⃟🔊 _Siuuu_
° ඬ⃟🔊 _Rawr_
° ඬ⃟🔊 _UwU_
° ඬ⃟🔊 _:c_
° ඬ⃟🔊 _a_

*<ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊/>*

° ඬ⃟🛠️ _${usedPrefix}afk *<motivo>*_
° ඬ⃟🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
° ඬ⃟🛠️ _${usedPrefix}calc *<operacion math>*_
° ඬ⃟🛠️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
° ඬ⃟🛠️ _${usedPrefix}qrcode *<texto>*_
° ඬ⃟🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
° ඬ⃟🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
° ඬ⃟🛠️ _${usedPrefix}styletext *<texto>*_
° ඬ⃟🛠️ _${usedPrefix}traducir *<texto>*_

*<ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸/>*

° ඬ⃟💵 _${usedPrefix}balance_
° ඬ⃟💵 _${usedPrefix}claim_
° ඬ⃟💵 _${usedPrefix}top_
° ඬ⃟💵 _${usedPrefix}levelup_
° ඬ⃟💵 _${usedPrefix}myns_
° ඬ⃟💵 _${usedPrefix}perfil_
° ඬ⃟💵 _${usedPrefix}work_
° ඬ⃟💵 _${usedPrefix}minar_
° ඬ⃟💵 _${usedPrefix}buy_
° ඬ⃟💵 _${usedPrefix}buyall_
° ඬ⃟💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
° ඬ⃟💵 _${usedPrefix}verificar_
° ඬ⃟💵 _${usedPrefix}unreg *<numero de serie>*_

*<𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊/>*

° ඬ⃟👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
° ඬ⃟👽 _${usedPrefix}attp *<texto>*_
° ඬ⃟👽 _${usedPrefix}ttp *<texto>*_
° ඬ⃟👽 _${usedPrefix}pat *<@tag>_
° ඬ⃟👽 _${usedPrefix}kiss *<@tag>*_
° ඬ⃟👽 _${usedPrefix}wm *<packname> <author>*_
° ඬ⃟👽 _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
° ඬ⃟👽 _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_

❍❍❍❖❍❍❍❍❍❍❖❍❍❍❍❍❍❖❍❍❍❍❍❍❖❍❍❍

*<𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊/>*

° ඬ⃟👑 _${usedPrefix}cajafuerte_
° ඬ⃟👑 _${usedPrefix}enable *restrict*_
° ඬ⃟👑 _${usedPrefix}disable *restrict*_
° ඬ⃟👑 _${usedPrefix}enable *autoread*_
° ඬ⃟👑 _${usedPrefix}disable *autoread*_
° ඬ⃟👑 _${usedPrefix}enable *public*_
° ඬ⃟👑 _${usedPrefix}disable *public*_
° ඬ⃟👑 _${usedPrefix}enable *pconly*_
° ඬ⃟👑 _${usedPrefix}disable *pconly*_
° ඬ⃟👑 _${usedPrefix}enable *gconly*_
° ඬ⃟👑 _${usedPrefix}disable *gconly*_
° ඬ⃟👑 _${usedPrefix}banchat2_
° ඬ⃟👑 _${usedPrefix}unbanchat2_
° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}unbanuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}bc *<texto>*_
° ඬ⃟👑 _${usedPrefix}bcchats *<texto>*_
° ඬ⃟👑 _${usedPrefix}bcgc *<texto>*_
° ඬ⃟👑 _${usedPrefix}cleartpm_
° ඬ⃟👑 _${usedPrefix}restart_
° ඬ⃟👑 _${usedPrefix}update_
° ඬ⃟👑 _${usedPrefix}addprem *<@tag>*_
° ඬ⃟👑 _${usedPrefix}delprem *<@tag>*_
° ඬ⃟👑 _${usedPrefix}listprem_
° ඬ⃟👑 _${usedPrefix}añadirdiamantes *<@tag> <cantidad>*_
° ඬ⃟👑 _${usedPrefix}añadirxp *<@tag> <cantidad>*_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['📮 𝙳𝙾𝙽𝙰𝚁 📮', '/donasi'],
['🌹 𝙾𝚆𝙽𝙴𝚁 🌹', '/owner'],
['🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾', '/infobot']
], m,)
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menucompleto|menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
