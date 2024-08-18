/** 

🇱‌🇮‌🇴‌🇳‌ 🇷‌🇦‌🇸‌🇹‌🇭‌🇦‌-🇲‌🇩‌

  𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟒. 
𝐋𝐢𝐜𝐞𝐧𝐬𝐞𝐝 𝐮𝐧𝐝𝐞𝐫 𝐭𝐡 𝐌𝐈𝐓 𝐋𝐢𝐜𝐞𝐧𝐬𝐞; 
𝐘𝐨𝐮 𝐦𝐚𝐲 𝐧𝐨𝐭 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐟𝐢𝐥𝐞 𝐞𝐱𝐜𝐞𝐩𝐭 𝐢𝐧 𝐜𝐨𝐦𝐩𝐥𝐢𝐚𝐧𝐜𝐞 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐋𝐢𝐜𝐞𝐧𝐬𝐞. 
𝐈𝐭 𝐢𝐬 𝐬𝐮𝐩𝐩𝐥𝐢𝐞𝐝 𝐢𝐧 𝐭𝐡𝐞 𝐡𝐨𝐩𝐞 𝐭𝐡𝐚𝐭 𝐢𝐭 𝐦𝐚𝐲 𝐛𝐞 𝐮𝐬𝐞𝐟𝐮𝐥. 
* @𝐩𝐫𝐨𝐣𝐞𝐜𝐭_𝐧𝐚𝐦𝐞 : 𝐋𝐈𝐎𝐍 𝐑𝐀𝐒𝐓𝐇𝐀 𝐌𝐃, 𝐚 𝐬𝐢𝐦𝐩𝐥𝐞 𝐚𝐧𝐝 𝐞𝐚𝐬𝐲 𝐖𝐡𝐭𝐬𝐚𝐩𝐩 𝐮𝐬𝐞𝐫 𝐛𝐨𝐭 
* @𝐨𝐰𝐧𝐞𝐫 : 𝐕𝐢𝐬𝐚𝐥 𝐂𝐡𝐚𝐧𝐮𝐤𝐚 
 
 **/





const { france } = require("../framework/france");
const canvacord = require("canvacord");
const {uploadImageToImgur} = require("../framework/imgur")

// Generic function to create a canvacord order
function createCanvacordCommand(commandName, canvacordFunction) {
  france({
    nomCom: commandName,
    categorie: "Image-Edit",
    reaction: "🎉"
  }, async (origineMessage, zk, commandeOptions) => {
    const { ms, msgRepondu, auteurMsgRepondu } = commandeOptions;
  const clientId = 'b40a1820d63cd4e' ;

    try {
      let img;
      if (msgRepondu) {

     if (msgRepondu.imageMessage) {
        const image = await zk.downloadAndSaveMediaMessage(msgRepondu.imageMessage)
         img = await uploadImageToImgur(image, clientId )
     } else {
        
        img = await zk.profilePictureUrl(auteurMsgRepondu, 'image'); }
      } else {
        img = "https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg";
      }

      const result = await canvacordFunction(img);

      await zk.sendMessage(origineMessage, { image: result }, { quoted: ms });
    } catch (error) {
      console.error(`Error when ordering "${commandName}":`, error);
    }
  });
}

// Créer des commandes avec différentes fonctions canvacord
createCanvacordCommand("shit", canvacord.Canvacord.shit);
createCanvacordCommand("wasted", canvacord.Canvacord.wasted);
createCanvacordCommand("wanted", canvacord.Canvacord.wanted);
createCanvacordCommand("trigger", canvacord.Canvacord.trigger);
createCanvacordCommand("trash", canvacord.Canvacord.trash);
createCanvacordCommand("rip", canvacord.Canvacord.rip);
createCanvacordCommand("sepia", canvacord.Canvacord.sepia);
createCanvacordCommand("rainbow", canvacord.Canvacord.rainbow);
createCanvacordCommand("hitler", canvacord.Canvacord.hitler);
createCanvacordCommand("invert", canvacord.Canvacord.invert);
createCanvacordCommand("jail", canvacord.Canvacord.jail);
createCanvacordCommand("affect", canvacord.Canvacord.affect);
  createCanvacordCommand("beautiful", canvacord.Canvacord.beautiful);
    createCanvacordCommand("blur", canvacord.Canvacord.blur);

   createCanvacordCommand("circle", canvacord.Canvacord.circle);
        createCanvacordCommand("facepalm", canvacord.Canvacord.facepalm);
        createCanvacordCommand("greyscale", canvacord.Canvacord.greyscale);
        createCanvacordCommand("joke", canvacord.Canvacord.jokeOverHead);













