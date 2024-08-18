

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

// Set a riddle list with questions and answers
const devinettes = [
  {
    question: "I can fly without wings, who am I?",
    reponse: "The weather",
  },
  {
    question: "I'm always hungry, the more I eat, the fatter I become. Who am I ?",
    reponse: "A black hole",
  },
  {
    question: "I'm strong when I'm down, but I'm weak when I'm up. Who am I ?",
    reponse: "The number 6",
  },
  {
    question: "I can be short or long, hard or soft, I can be used by anyone, from young children to experienced musicians. Who am I ?",
    reponse: "A pencil",
  },
  {
    question: "I am the beginning of the end, the end of every place. I am the beginning of eternity, the end of time and space. Who am I ?",
    reponse: "The letter 'e'",
  },
  {
    question: "I am white when I am dirty and black when I am clean. Who am I ?",
    reponse: "A slate",
  },
  {
    question: "I'm liquid, but if you take water away from me, I become solid. Who am I ?",
    reponse: "Tea",
  },
  {
    question: "I fly without wings, I cry without eyes. Wherever I am, death always accompanies me. Who am I ?",
    reponse: "The wind",
  },
  {
    question: "I have towns, but no houses. I have mountains, but no trees. I have water, but no fish. Who am I ?",
    reponse: "A map",
  },
  {
    question: "I can be read, but you can't write about me. You always give to me, but rarely keep me. Who am I ?",
    reponse: "A borrowed book",
  },
  {
    question: "I come twice in a week, once in a year, but never in a day. Who am I ?",
    reponse: "The letter 'E'",
  },
  {
    question: "I'm hard to grasp, but you will hold me in your hand when you find me. Who am I ?",
    reponse: "Your breath",
  },
  {
    question: "The hotter I am, the colder I become. Who am I ?",
    reponse: "coffe",
  },
  {
    question: "I am the stuff of dreams. I cover broken ideas. I change souls into wings. Who am I ?",
    reponse: "A book",
  },
  {
    question: "I am white when I am dirty and black when I am clean. Who am I?",
    reponse: "A slate",
  },
  {
    question: "I can fly without having wings. I can cry without having eyes. Who am I ?",
    reponse: "A cloud",
  },
  {
    question: "I start at night and finish in the morning. Who am I ?",
    reponse: "The letter 'N'",
  },
  {
    question: "I can be read, but you can't write about me. You always give to me, but rarely keep me. Who am I ?",
    reponse: "A borrowed book",
  },
  {
    question: "I feed on everything around me, the air, the earth and even the trees. Who am I ?",
    reponse: "a fire",
  },
  {
    question: "I am white when I am dirty and black when I am clean. Who am I ?",
    reponse: "A slate",
  },
  {
    question: "I'm liquid, but if you take water away from me, I become solid. Who am I ?",
    reponse: "tea",
  },
  {
    question: "I am the beginning of the end and the end of every place. I am the beginning of eternity, the end of time and space. Who am I ?",
    reponse: "the letter'E'",
  },
  {
    question: "I'm hard to grasp, but you will hold me in your hand when you find me. Who am I ?",
    reponse: "Your breath",
  },
  ];
  
france({ nomCom: "riddle", categorie: "Games" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre } = commandeOptions;

  // Choose a random riddle
  const devinette = devinettes[Math.floor(Math.random() * devinettes.length)];
// Send the riddle question
  await zk.sendMessage(
    dest,
    {
      text: `Riddle: ${devinette.question} . \n you have 30 seconds to think about.`,
    },
    { quoted: ms }
  );

  //Wait 60 seconds before sending the response
  await delay(30000);

  // Answer
  await zk.sendMessage(
    dest,
    {
      text: `The answer was : ${devinette.reponse}`,
    },
    { quoted: ms }
  );
});

// Function to create a pause/delay in milliseconds
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
