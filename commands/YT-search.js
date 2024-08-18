

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
const { getytlink, ytdwn } = require("../framework/ytdl-core");
const yts = require("yt-search");
const ytdl = require('ytdl-core');
const fs = require('fs');

france({ nomCom: "yts", categorie: "Search", reaction: "✋" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
  const query = arg.join(" ");

  if (!query[0]) {
    repondre("what do you want");
    return;
  }

  try {
    const info = await yts(query);
    const resultat = info.videos;

    let captions = "";
    for (let i = 0; i < 10; i++) {
      captions += `----------------\nTitle: ${resultat[i].title}\nTime : ${resultat[i].timestamp}\nUrl: ${resultat[i].url}\n`;
    }
    captions += "\n======\n*powered by FLASH-MD*";

    // repondre(captions)
    zk.sendMessage(dest, { image: { url: resultat[0].thumbnail }, caption: captions }, { quoted: ms });
  } catch (error) {
    repondre("Erreur lors de la procédure : " + error);
  }
});

france({
  nomCom: "ytmp4",
  categorie: "Download",
  reaction: "🎥"
}, async (origineMessage, zk, commandeOptions) => {
  const { arg, ms, repondre } = commandeOptions;

  if (!arg[0]) {
    repondre("insert a youtube link");
    return;
  }

  const topo = arg.join(" ");
  try {
    /* const search = await yts(topo);
    const videos = search.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const Element = videos[0];

      let InfoMess = {
        image: { url: videos[0].thumbnail },
        caption: `*nom de la vidéo :* _${Element.title}_
*Durée :* _${Element.timestamp}_
*Lien :* _${Element.url}_
_*En cours de téléchargement...*_\n\n`
      };

      zk.sendMessage(origineMessage, InfoMess, { quoted: ms });
    */

    // Obtenir les informations de la vidéo à partir du lien YouTube
    const videoInfo = await ytdl.getInfo(topo);
    // Format vidéo avec la meilleure qualité disponible
    const format = ytdl.chooseFormat(videoInfo.formats, { quality: '18' });
    // Télécharger la vidéo
    const videoStream = ytdl.downloadFromInfo(videoInfo, { format });

    // Nom du fichier local pour sauvegarder la vidéo
    const filename = 'video.mp4';

    // Écrire le flux vidéo dans un fichier local
    const fileStream = fs.createWriteStream(filename);
    videoStream.pipe(fileStream);

    fileStream.on('finish', () => {
      // Envoi du fichier vidéo en utilisant l'URL du fichier local
      zk.sendMessage(origineMessage, { video: { url: `./${filename}` }, caption: "Powered by *FLASH-MD*", gifPlayback: false }, { quoted: ms });

    });

    fileStream.on('error', (error) => {
      console.error('Erreur lors de l\'écriture du fichier vidéo :', error);
      repondre('Une erreur est survenue lors de l\'écriture du fichier vidéo.');
    });

  } catch (error) {
    console.error('Erreur lors de la recherche ou du téléchargement de la vidéo :', error);
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.' + error);
  }
});

france({
  nomCom: "ytmp3",
  categorie: "Download",
  reaction: "💿"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Insert a youtube link");
    return;
  }

  try {
    let topo = arg.join(" ");

    const audioStream = ytdl(topo, { filter: 'audioonly', quality: 'highestaudio' });

    // Nom du fichier local pour sauvegarder le fichier audio
    const filename = 'audio.mp3';

    // Écrire le flux audio dans un fichier local
    const fileStream = fs.createWriteStream(filename);
    audioStream.pipe(fileStream);

    fileStream.on('finish', () => {
      // Envoi du fichier audio en utilisant l'URL du fichier local
      zk.sendMessage(origineMessage, { audio: { url: `./${filename}` }, mimetype: 'audio/mp4' }, { quoted: ms, ptt: false });
      console.log("Envoi du fichier audio terminé !");
    });

    fileStream.on('error', (error) => {
      console.error('Erreur lors de l\'écriture du fichier audio :', error);
      repondre('Une erreur est survenue lors de l\'écriture du fichier audio.');
    });

  } catch (error) {
    console.error('Erreur lors de la recherche ou du téléchargement de la vidéo :', error);
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.');
  }
});
