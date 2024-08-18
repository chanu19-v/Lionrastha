/** 

🇱‌🇮‌🇴‌🇳‌ 🇷‌🇦‌🇸‌🇹‌🇭‌🇦‌-🇲‌🇩‌

  𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟒. 
𝐋𝐢𝐜𝐞𝐧𝐬𝐞𝐝 𝐮𝐧𝐝𝐞𝐫 𝐭𝐡 𝐌𝐈𝐓 𝐋𝐢𝐜𝐞𝐧𝐬𝐞; 
𝐘𝐨𝐮 𝐦𝐚𝐲 𝐧𝐨𝐭 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐟𝐢𝐥𝐞 𝐞𝐱𝐜𝐞𝐩𝐭 𝐢𝐧 𝐜𝐨𝐦𝐩𝐥𝐢𝐚𝐧𝐜𝐞 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐋𝐢𝐜𝐞𝐧𝐬𝐞. 
𝐈𝐭 𝐢𝐬 𝐬𝐮𝐩𝐩𝐥𝐢𝐞𝐝 𝐢𝐧 𝐭𝐡𝐞 𝐡𝐨𝐩𝐞 𝐭𝐡𝐚𝐭 𝐢𝐭 𝐦𝐚𝐲 𝐛𝐞 𝐮𝐬𝐞𝐟𝐮𝐥. 
* @𝐩𝐫𝐨𝐣𝐞𝐜𝐭_𝐧𝐚𝐦𝐞 : 𝐋𝐈𝐎𝐍 𝐑𝐀𝐒𝐓𝐇𝐀 𝐌𝐃, 𝐚 𝐬𝐢𝐦𝐩𝐥𝐞 𝐚𝐧𝐝 𝐞𝐚𝐬𝐲 𝐖𝐡𝐭𝐬𝐚𝐩𝐩 𝐮𝐬𝐞𝐫 𝐛𝐨𝐭 
* @𝐨𝐰𝐧𝐞𝐫 : 𝐕𝐢𝐬𝐚𝐥 𝐂𝐡𝐚𝐧𝐮𝐤𝐚 
 
 **/








const { france } = require('../framework/france');
const { attribuerUnevaleur } = require('../bdd/welcome');

async function events(nomCom) {
    france({
        nomCom: nomCom,
        categorie: 'Group'
    }, async (dest, zk, commandeOptions) => {
        const { ms, arg, repondre, superUser, verifAdmin } = commandeOptions;

        if (verifAdmin || superUser) {
            if (!arg[0] || arg.join(' ') === ' ') {
                repondre(nomCom + ' ' + ' on to active and ' + ' ' + nomCom + ' ' + 'off to put off');
            } else {
                if (arg[0] === 'on' || arg[0] === 'off') {
                    
                    await attribuerUnevaleur(dest, nomCom, arg[0]);
                    repondre( nomCom + "is Successfully Activated" + arg[0]);
                } else {
                    repondre('type on to activate or off to put it off');
                }
            }
        } else {
            repondre('You can\'t use this commands ');
        }
    });
}

// Appel de la fonction events pour les valeurs 'welcome' et 'goodbye'
events('welcome');
events('goodbye');
events('antipromote');
events('antidemote') ;


