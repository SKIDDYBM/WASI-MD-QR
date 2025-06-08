const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: it_Tech,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function WASI_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_it_Tech = it_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_it_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_it_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_it_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_it_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Wasi_Tech.sendMessage(Pair_Code_By_it_Tech.user.id, { text: '' + b64data });

               let IT_TECH_TEXT = `
*_Pair Code Connected by IT TECH_*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『𝗪𝗢𝗪 𝗔𝗠𝗔𝗭𝗜𝗡𝗚 𝗖𝗛𝗢SEN IT TECH BRO'S』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *tiktok:* _tiktok.com/@skiddybmx_cmd_1
║❒ *Owner:* _https://wa.me/message/255741927849_
║❒ *Repo:* _https://github.com/techbroh/IT-TECH-BRO-S-_
║❒ *WaGroup:* _https://chat.whatsapp.com/BtxkX8ISmWF7JnJNZgw4xz_
║❒ *WaChannel:* _https://whatsapp.com/channel/0029Vb5e33h96H4QYhiGIQ2V_
║❒ *Plugins:* _https://github.com/techbroh/IT-TECH-BRO-S- 
╚════════════════════════╝
_____________________________________

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_it_Tech.sendMessage(Pair_Code_By_it_Tech.user.id,{text:IT_TECH_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_it_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    IT_TECH_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await IT_TECH_PAIR_CODE()
});
module.exports = router
