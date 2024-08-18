
/** 

🇱‌🇮‌🇴‌🇳‌ 🇷‌🇦‌🇸‌🇹‌🇭‌🇦‌-🇲‌🇩‌

  𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟒. 
𝐋𝐢𝐜𝐞𝐧𝐬𝐞𝐝 𝐮𝐧𝐝𝐞𝐫 𝐭𝐡 𝐌𝐈𝐓 𝐋𝐢𝐜𝐞𝐧𝐬𝐞; 
𝐘𝐨𝐮 𝐦𝐚𝐲 𝐧𝐨𝐭 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐟𝐢𝐥𝐞 𝐞𝐱𝐜𝐞𝐩𝐭 𝐢𝐧 𝐜𝐨𝐦𝐩𝐥𝐢𝐚𝐧𝐜𝐞 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐋𝐢𝐜𝐞𝐧𝐬𝐞. 
𝐈𝐭 𝐢𝐬 𝐬𝐮𝐩𝐩𝐥𝐢𝐞𝐝 𝐢𝐧 𝐭𝐡𝐞 𝐡𝐨𝐩𝐞 𝐭𝐡𝐚𝐭 𝐢𝐭 𝐦𝐚𝐲 𝐛𝐞 𝐮𝐬𝐞𝐟𝐮𝐥. 
* @𝐩𝐫𝐨𝐣𝐞𝐜𝐭_𝐧𝐚𝐦𝐞 : 𝐋𝐈𝐎𝐍 𝐑𝐀𝐒𝐓𝐇𝐀 𝐌𝐃, 𝐚 𝐬𝐢𝐦𝐩𝐥𝐞 𝐚𝐧𝐝 𝐞𝐚𝐬𝐲 𝐖𝐡𝐭𝐬𝐚𝐩𝐩 𝐮𝐬𝐞𝐫 𝐛𝐨𝐭 
* @𝐨𝐰𝐧𝐞𝐫 : 𝐕𝐢𝐬𝐚𝐥 𝐂𝐡𝐚𝐧𝐮𝐤𝐚 
 
 **/











const {france }= require ('../framework/france') ;
const {addstickcmd, deleteCmd, getCmdById, inStickCmd , getAllStickCmds} = require('../bdd/stickcmd') ;



france(
    {
        nomCom : 'setcmd',
        categorie : 'stickcmd'
        
    }, async (dest,zk,commandeOptions) => { 

   const {ms , arg, repondre,superUser , msgRepondu} = commandeOptions;

    if (!superUser) { repondre('you can\'t use this command') ; return} ;

      if(msgRepondu && msgRepondu.stickerMessage )  {
  
         if(!arg || !arg[0]) { repondre('put the name of the command') ; return} ;
          
        
         await addstickcmd(arg[0].toLowerCase() , msgRepondu.stickerMessage.url ) ;

         repondre('Stick cmd save successfully')

      } else {

        repondre('mention a sticker')
      }

    }) ; 

    france(
      {
          nomCom: 'delcmd',
          categorie: 'stickcmd'
      },
      async (dest, zk, commandeOptions) => {
  
          const { ms, arg, repondre, superUser } = commandeOptions;
  
          if (!superUser) {
              repondre('only Mods can use this command');
              return;
          }
  
          if (!arg || !arg[0]) {
              repondre('put the name of the command that you want to delete');
              return;
          }
  
          const cmdToDelete = arg[0];

  
          try {
              await deleteCmd(cmdToDelete.toLowerCase());
              repondre(`the command ${cmdToDelete} is deleted successfully.`);
          } catch {
              repondre(`the command ${cmdToDelete} don't exist`);
          }
      }
  );
  

  france(
    {
        nomCom: 'allcmd',
        categorie: 'stickcmd'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, superUser } = commandeOptions;

        if (!superUser) {
            repondre('only Mods can use this command');
            return;
        }

        const allCmds = await getAllStickCmds();

        if (allCmds.length > 0) {
            const cmdList = allCmds.map(cmd => cmd.cmd).join(', ');
            repondre(`*List of all stickcmd :*
 ${cmdList}`);
        } else {
            repondre('No stickcmd save');
        }
    }
);
