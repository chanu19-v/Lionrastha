/** 

🇱‌🇮‌🇴‌🇳‌ 🇷‌🇦‌🇸‌🇹‌🇭‌🇦‌-🇲‌🇩‌

  𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟒. 
𝐋𝐢𝐜𝐞𝐧𝐬𝐞𝐝 𝐮𝐧𝐝𝐞𝐫 𝐭𝐡 𝐌𝐈𝐓 𝐋𝐢𝐜𝐞𝐧𝐬𝐞; 
𝐘𝐨𝐮 𝐦𝐚𝐲 𝐧𝐨𝐭 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐟𝐢𝐥𝐞 𝐞𝐱𝐜𝐞𝐩𝐭 𝐢𝐧 𝐜𝐨𝐦𝐩𝐥𝐢𝐚𝐧𝐜𝐞 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐋𝐢𝐜𝐞𝐧𝐬𝐞. 
𝐈𝐭 𝐢𝐬 𝐬𝐮𝐩𝐩𝐥𝐢𝐞𝐝 𝐢𝐧 𝐭𝐡𝐞 𝐡𝐨𝐩𝐞 𝐭𝐡𝐚𝐭 𝐢𝐭 𝐦𝐚𝐲 𝐛𝐞 𝐮𝐬𝐞𝐟𝐮𝐥. 
* @𝐩𝐫𝐨𝐣𝐞𝐜𝐭_𝐧𝐚𝐦𝐞 : 𝐋𝐈𝐎𝐍 𝐑𝐀𝐒𝐓𝐇𝐀 𝐌𝐃, 𝐚 𝐬𝐢𝐦𝐩𝐥𝐞 𝐚𝐧𝐝 𝐞𝐚𝐬𝐲 𝐖𝐡𝐭𝐬𝐚𝐩𝐩 𝐮𝐬𝐞𝐫 𝐛𝐨𝐭 
* @𝐨𝐰𝐧𝐞𝐫 : 𝐕𝐢𝐬𝐚𝐥 𝐂𝐡𝐚𝐧𝐮𝐤𝐚 
 
 **/







const axios = require('axios');
const { france } = require("../framework/france");
const fs = require("fs-extra");
const { exec } = require("child_process");
const child_process = require('child_process');
const {unlink } = require ('fs').promises ;


// fonction sleep

const sleep =  (ms) =>{
    return new Promise((resolve) =>{ setTimeout (resolve, ms)})
    
    } 

// Fonction pour la conversion de GIF en vidéo et récupération du buffer vidéo
const GIFBufferToVideoBuffer = async (image) => {
    const filename = `${Math.random().toString(36)}`;
    await fs.writeFileSync(`./${filename}.gif`, image);
    child_process.exec(
        `ffmpeg -i ./${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./${filename}.mp4`
    );
    await sleep(4000);
  
    var buffer5 = await fs.readFileSync(`./${filename}.mp4`);
    Promise.all([unlink(`./${filename}.mp4`), unlink(`./${filename}.gif`)]);
    return buffer5;
};

const generateReactionCommand = (reactionName, reactionEmoji) => {
    france({
        nomCom: reactionName,
        categorie: "Reaction",
        reaction: reactionEmoji,
    },
    async (origineMessage, zk, commandeOptions) => {
        const { auteurMessage, auteurMsgRepondu, repondre, ms, msgRepondu } = commandeOptions;

        const url = `https://api.waifu.pics/sfw/${reactionName}`;
        try {
            const response = await axios.get(url);
            const imageUrl = response.data.url;

            // Obtenir le buffer du GIF en utilisant la fonction getBuffer
             const gifBufferResponse = await  axios.get(imageUrl, {
                responseType: 'arraybuffer' }) ;
            const gifBuffer = await gifBufferResponse.data;

            // Convertir le GIF en vidéo et obtenir le buffer vidéo
            const videoBuffer = await GIFBufferToVideoBuffer(gifBuffer);

            // Envoyer la vidéo avec france
            if (msgRepondu) { 
              var txt =` @${auteurMessage.split("@")[0]}  ${reactionName} @${auteurMsgRepondu.split("@")[0]}`
       zk.sendMessage(origineMessage, { video: videoBuffer,gifPlayback: true,caption:txt,mentions:[auteurMessage,auteurMsgRepondu] }, { quoted: ms });
    
            } else {
                const videoMessage = {
                    video: videoBuffer,
                    gifPlayback: true,
                    caption: `@${auteurMessage.split("@")[0]} ${reactionName} everyone`,
                    mentions: [auteurMessage]
                };
                zk.sendMessage(origineMessage, videoMessage, { quoted: ms });
            }

        } catch (error) {
            repondre('Erreur lors de la récupération des données :' + error);
            console.log(error);
        }
    });
};

// ... (utilisation de la fonction generateReactionCommand pour créer des commandes de réaction)


generateReactionCommand("bully", "👊");
generateReactionCommand("cuddle", "🤗");
generateReactionCommand("cry", "😢");
generateReactionCommand("hug", "😊");
generateReactionCommand("awoo", "🐺");
generateReactionCommand("kiss", "😘");
generateReactionCommand("lick", "👅");
generateReactionCommand("pat", "👋");
generateReactionCommand("smug", "😏");
generateReactionCommand("bonk", "🔨");
generateReactionCommand("yeet", "🚀");
generateReactionCommand("blush", "😊");
generateReactionCommand("smile", "😄");
generateReactionCommand("wave", "👋");
generateReactionCommand("highfive");
generateReactionCommand("handhold");
generateReactionCommand("nom","👅" );
generateReactionCommand("bite", "🦷");
generateReactionCommand("glomp", "🤗");
generateReactionCommand("slap", "👋");
generateReactionCommand("kill", "💀");
generateReactionCommand("kick", "🦵");
generateReactionCommand("happy", "😄");
generateReactionCommand("wink", "😉");
generateReactionCommand("poke", "👉");
generateReactionCommand("dance", "💃");
generateReactionCommand("cringe", "😬");
