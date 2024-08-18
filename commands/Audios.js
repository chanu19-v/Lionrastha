

/** 

🇱‌🇮‌🇴‌🇳‌ 🇷‌🇦‌🇸‌🇹‌🇭‌🇦‌-🇲‌🇩‌

  𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟒. 
𝐋𝐢𝐜𝐞𝐧𝐬𝐞𝐝 𝐮𝐧𝐝𝐞𝐫 𝐭𝐡 𝐌𝐈𝐓 𝐋𝐢𝐜𝐞𝐧𝐬𝐞; 
𝐘𝐨𝐮 𝐦𝐚𝐲 𝐧𝐨𝐭 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐟𝐢𝐥𝐞 𝐞𝐱𝐜𝐞𝐩𝐭 𝐢𝐧 𝐜𝐨𝐦𝐩𝐥𝐢𝐚𝐧𝐜𝐞 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐋𝐢𝐜𝐞𝐧𝐬𝐞. 
𝐈𝐭 𝐢𝐬 𝐬𝐮𝐩𝐩𝐥𝐢𝐞𝐝 𝐢𝐧 𝐭𝐡𝐞 𝐡𝐨𝐩𝐞 𝐭𝐡𝐚𝐭 𝐢𝐭 𝐦𝐚𝐲 𝐛𝐞 𝐮𝐬𝐞𝐟𝐮𝐥. 
* @𝐩𝐫𝐨𝐣𝐞𝐜𝐭_𝐧𝐚𝐦𝐞 : 𝐋𝐈𝐎𝐍 𝐑𝐀𝐒𝐓𝐇𝐀 𝐌𝐃, 𝐚 𝐬𝐢𝐦𝐩𝐥𝐞 𝐚𝐧𝐝 𝐞𝐚𝐬𝐲 𝐖𝐡𝐭𝐬𝐚𝐩𝐩 𝐮𝐬𝐞𝐫 𝐛𝐨𝐭 
* @𝐨𝐰𝐧𝐞𝐫 : 𝐕𝐢𝐬𝐚𝐥 𝐂𝐡𝐚𝐧𝐮𝐤𝐚 
 
 **/






const {france} = require('../framework/france');
const fs = require("fs");
const { exec } = require("child_process");


const filename = `${Math.random().toString(36)}`;

france (
    {
        nomCom : 'deep',
        categorie : 'Audio-Edit',

    }, async (dest , zk, commandeOptions) => {
        const {ms , repondre,msgRepondu} = commandeOptions;

        if (msgRepondu) {
            if(msgRepondu.audioMessage) {

                const media = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage)

                let set = "-af atempo=4/4,asetrate=44500*2/3";
                let ran = `${filename}.mp3`;
            
                try {
                  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media);
                    if (err) return repondre("error during the procedure " + err );
                   
                    let buff1 = fs.readFileSync(ran);
                   
                    zk.sendMessage(
                      dest,
                      { audio: buff1, mimetype: "audio/mpeg" },
                      { quoted: ms }
                    );
                    fs.unlinkSync(ran);
                  });
                } catch (e) {
                 
                  repondre("error");
                }

            } else {
                repondre('the command only works with audio messages')
            }

        } else {
            repondre('Please mention an audio')
        }
    }
);

france (
    {
        nomCom : 'bass',
        categorie : 'Audio-Edit',

    }, async (dest , zk, commandeOptions) => {
        const {ms , repondre,msgRepondu} = commandeOptions;

        if (msgRepondu) {
            if(msgRepondu.audioMessage) {

                const media2 = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage)

                let set2 = "-af equalizer=f=18:width_type=o:width=2:g=14";
                let ran2 = `${filename}.mp3`;
            
                try {
                  exec(`ffmpeg -i ${media2} ${set2} ${ran2}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media2);
                    if (err) return repondre("error during the procedure " + err );
                   
                    let buff2 = fs.readFileSync(ran2);
                   
                    zk.sendMessage(
                      dest,
                      { audio: buff2, mimetype: "audio/mpeg" },
                      { quoted: ms }
                    );
                    fs.unlinkSync(ran2);
                  });
                } catch (e) {
                 
                  repondre("error");
                }

            } else {
                repondre('the command only works with audio messages')
            }

        } else {
            repondre('Please mention an audio')
        }
    }
);

france(
    {
      nomCom: 'reverse',
      categorie: 'Audio-Edit',
    },
    async (dest, zk, commandeOptions) => {
      const { ms, repondre, msgRepondu } = commandeOptions;
  
      if (msgRepondu) {
        if (msgRepondu.audioMessage) {
          const media3 = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
          let set3 = '-filter_complex "areverse"';
          let ran3 = `${filename}.mp3`;
  
          try {
            exec(`ffmpeg -i ${media3} ${set3} ${ran3}`, (err, stderr, stdout) => {
              fs.unlinkSync(media3);
              if (err) return repondre("error during the procedure" + err);
  
              let buff3 = fs.readFileSync(ran3);
  
              zk.sendMessage(dest, { audio: buff3, mimetype: "audio/mpeg" }, { quoted: ms });
              fs.unlinkSync(ran3);
            });
          } catch (e) {
            repondre("Error : " + e);
          }
        } else {
          repondre("The command only works with audio messages");
        }
      } else {
        repondre("Please mention an audio");
      }
    }
  );
  
  france(
    {
      nomCom: 'slow',
      categorie: 'Audio-Edit',
    },
    async (dest, zk, commandeOptions) => {
      const { ms, repondre, msgRepondu } = commandeOptions;
  
      if (msgRepondu) {
        if (msgRepondu.audioMessage) {
          const media5 = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
          let set5 = '-filter:a "atempo=0.8,asetrate=44100"';
          let ran5 = `${filename}.mp3`;
  
          try {
            exec(`ffmpeg -i ${media5} ${set5} ${ran5}`, (err, stderr, stdout) => {
              fs.unlinkSync(media5);
              if (err) return repondre("error during the procedure" + err);
  
              let buff5 = fs.readFileSync(ran5);
  
              zk.sendMessage(dest, { audio: buff5, mimetype: "audio/mpeg" }, { quoted: ms });
              fs.unlinkSync(ran5);
            });
          } catch (e) {
            repondre("Error : " + e);
          }
        } else {
          repondre("The command only works with audio messages");
        }
      } else {
        repondre("Please mention an audio");
      }
    }
  );

// Cas pour l'effet "smooth"
france(
    {
      nomCom: 'smooth',
      categorie: 'Audio-Edit',
    },
    async (dest, zk, commandeOptions) => {
      const { ms, repondre, msgRepondu } = commandeOptions;
  
      if (msgRepondu) {
        if (msgRepondu.audioMessage) {
          const mediaSmooth = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
          let setSmooth = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';
          let ranSmooth = `${filename}.mp3`;
  
          try {
            exec(`ffmpeg -i ${mediaSmooth} ${setSmooth} ${ranSmooth}`, (err, stderr, stdout) => {
              fs.unlinkSync(mediaSmooth);
              if (err) return repondre("error during the procedure" + err);
  
              let buff6 = fs.readFileSync(ranSmooth);
  
              zk.sendMessage(dest, { audio: buff6, mimetype: "audio/mpeg" }, { quoted: ms });
              fs.unlinkSync(ranSmooth);
            });
          } catch (e) {
            repondre("Error : " + e);
          }
        } else {
          repondre("The command only works with audio messages");
        }
      } else {
        repondre("Please mention an audio");
      }
    }
  );
  
  // Cas pour l'effet "tempo"
  france(
    {
      nomCom: 'tempo',
      categorie: 'Audio-Edit',
    },
    async (dest, zk, commandeOptions) => {
      const { ms, repondre, msgRepondu } = commandeOptions;
  
      if (msgRepondu) {
        if (msgRepondu.audioMessage) {
          const mediaTempo = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
          let setTempo = '-filter:a "atempo=0.9,asetrate=65100"';
          let ranTempo = `${filename}.mp3`;
  
          try {
            exec(`ffmpeg -i ${mediaTempo} ${setTempo} ${ranTempo}`, (err, stderr, stdout) => {
              fs.unlinkSync(mediaTempo);
              if (err) return repondre("error during the procedure " + err);
  
              let buff7 = fs.readFileSync(ranTempo);
  
              zk.sendMessage(dest, { audio: buff7, mimetype: "audio/mpeg" }, { quoted: ms });
              fs.unlinkSync(ranTempo);
            });
          } catch (e) {
            repondre("Error : " + e);
          }
        } else {
          repondre("The command only works with audio messages");
        }
      } else {
        repondre("Please mention an audio");
      }
    }
  );
  
  // Cas pour l'effet "nightcore"
  france(
    {
      nomCom: 'nightcore',
      categorie: 'Audio-Edit',
    },
    async (dest, zk, commandeOptions) => {
      const { ms, repondre, msgRepondu } = commandeOptions;
  
      if (msgRepondu) {
        if (msgRepondu.audioMessage) {
          const mediaNightcore = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
          let setNightcore = '-filter:a "atempo=1.07,asetrate=44100*1.20"';
          let ranNightcore = `${filename}.mp3`;
  
          try {
            exec(`ffmpeg -i ${mediaNightcore} ${setNightcore} ${ranNightcore}`, (err, stderr, stdout) => {
              fs.unlinkSync(mediaNightcore);
              if (err) return repondre("error during the procedure " + err);
  
              let buff8 = fs.readFileSync(ranNightcore);
  
              zk.sendMessage(dest, { audio: buff8, mimetype: "audio/mpeg" }, { quoted: ms });
              fs.unlinkSync(ranNightcore);
            });
          } catch (e) {
            repondre("Erreur : " + e);
          }
        } else {
          repondre("The command only works with audio messages");
        }
      } else {
        repondre("Please mention an audio");
      }
    }
  );
  
