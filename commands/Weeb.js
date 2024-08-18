
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
const fs = require('fs');
const { france } = require("../framework/france");
const { writeFile } = require('fs/promises')

// Commande waifu
france({
  nomCom: "waifu",
  categorie: "Weeb",
  reaction: "😏"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.waifu.pics/sfw/waifu'; // Remplacez avec le lien réel de l'API waifu.pics

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('Erreur lors de la récupération des données :', error);
  }
});

// Commande neko
france({
  nomCom: "neko",
  categorie: "Weeb",
  reaction: "😺"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.waifu.pics/sfw/neko'; // Remplacez avec le lien réel de l'API waifu.pics ou une autre API de nekos

  try {
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('Erreur lors de la récupération des données :', error);
  }
});

// Commande shinobu
france({
  nomCom: "shinobu",
  categorie: "Weeb",
  reaction: "🦋"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.waifu.pics/sfw/shinobu'; // Remplacez avec le lien réel de l'API waifu.pics ou une autre API avec des images de Shinobu

  try {
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('Erreur lors de la récupération des données :', error);
  }
});

// Commande megumin
france({
  nomCom: "megumin",
  categorie: "Weeb",
  reaction: "💥"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.waifu.pics/sfw/megumin'; // Remplacez avec le lien réel de l'API waifu.pics ou une autre API avec des images de Megumin

  try {
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage,{ image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('Erreur lors de la récupération des données :', error);
  }
});



france({
  nomCom: "cosplay",
  categorie: "Weeb",
  reaction: "😏"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;



  try {
    for (let i = 0; i < 5; i++) {
      let url = 'https://fantox-cosplay-api.onrender.com/'
      
   const response = await   axios.get(url, { responseType: 'arraybuffer' })

  

  const image = response.data;

   await writeFile('./cosplay.jpg', image)
      zk.sendMessage(origineMessage,{image : {url : `./cosplay.jpg`}},{quoted :ms}) }
  
  } catch (e) {
    repondre("je reçois malheureusement une erreur : " + e);
  }
});


france({nomCom:"couplepp",categorie: "Weeb",reaction : "💞"},async(dest,zk,commandeOptions)=>{ const {repondre , ms} = commandeOptions;
    let api = 'https://smiling-hosiery-bear.cyclic.app/weeb/couplepp'
  try {
     repondre('she/he dont love you :)')
 const result = await axios.get(api)
  

    zk.sendMessage(dest, { image: { url: result.data.male }, caption: `For Man` }, { quoted: ms })
        zk.sendMessage(dest, { image: { url: result.data.female }, caption: `_For woman_` }, { quoted: ms })
    
  } catch (e) { repondre(e)}                                                                                        
  
}
      )
