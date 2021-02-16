const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));



const { readFile, writeFile } = require('fs').promises;
const { get } = require('request-promise');
const { Client, Enums } = require('fnbr');

//https://www.epicgames.com/id/logout?redirectUrl=https%3A//www.epicgames.com/id/login/epic%3FredirectUrl%3Dhttps%253A%252F%252Fwww.epicgames.com%252Fid%252Fapi%252Fredirect%253FclientId%253D3446cd72694c4a4485d81b77adbb2141%2526responseType%253Dcode 






const config = require('./config.json');






// Your fortniteapi.io api key https://dashboard.fortniteapi.io/
const APIKEY = '68af0d85-77f992cc-27aa9015-6a1dad48';


const fetchCosmetic = async (name, type) => {
  try {
    const cosmetic = await get({
      url: `https://fortniteapi.io/items/list?name=${encodeURI(name)}&type=${type}`,
      headers: { Authorization: APIKEY },
      json: true,
    });
    return cosmetic.items[0];
  } catch (err) {
    return undefined;
  }
};




(async () => {
  let auth;
  





  try {
    auth = { deviceAuth: JSON.parse(await readFile('./deviceAuth.json')) };
  } catch (e) {
    console.log('https://www.epicgames.com/id/logout?redirectUrl=https%3A//www.epicgames.com/id/login/epic%3FredirectUrl%3Dhttps%253A%252F%252Fwww.epicgames.com%252Fid%252Fapi%252Fredirect%253FclientId%253D3446cd72694c4a4485d81b77adbb2141%2526responseType%253Dcode ')
    auth = { authorizationCode: async () => Client.consoleQuestion('Please enter an authorization code: ') };
  }








const handleCommand = async (m) => {
  if (!m.content.startsWith('@')) return;
  const args = m.content.slice(1).split(' ');
  const command = args.shift().toLowerCase();





  
      
    
 
  if (command === 'outfit' || command === 'skin') {
    const skin = await fetchCosmetic(args.join(' '), 'outfit');
    if (skin) {
      client.party.me.setOutfit(skin.id);
      m.reply(`Set the skin to ${skin.name}!`);
    } else m.reply(`The skin ${args.join(' ')} wasn't found!`);
  } else if (command === 'emote' || command === 'dance') {
    const emote = await fetchCosmetic(args.join(' '), 'emote');
    if (emote) {
      m.Client.party.me.setEmote(emote.id);
      m.reply(`Set the emote to ${emote.name}!`);
    } else m.reply(`The emote ${args.join(' ')} wasn't found!`);
  } else if (command === 'purpleskull') {
      client.party.me.setOutfit('CID_030_Athena_Commando_M_Halloween', [{ channel: 'ClothingColor', variant: 'Mat1' }]);
    } else if (command === 'pinkghoul') {
      client.party.me.setOutfit('CID_029_Athena_Commando_F_Halloween', [{ channel: 'Material', variant: 'Mat3' }]);
    } else if (command === 'pickaxe') {
    const pickaxe = await fetchCosmetic(args.join(' '), 'pickaxe');
    if (pickaxe) {
      m.Client.party.me.setPickaxe(pickaxe.id);
      m.reply(`Set the harvesting to ${pickaxe.name}`);
    } else m.reply(`The harvesting tool ${args.join(' ')} wasn't found!`);
    } else if (command === 'backpack') {
    const backpack = await fetchCosmetic(args.join(' '), 'backpack');
    if (backpack) {
      m.Client.party.me.setBackpack(backpack.id);
      m.reply(`Set the backpack ${backpack.name}`);
    } else m.reply(`The backpack ${args.join(' ')} wasn't found!`);
    } 
};

  const logon = {
    status: config.status,
    auth: auth
  } 

const client = new Client(logon);





  client.on('friend:message', (friendMessage) => {
    console.log('New Message')
    if(friendMessage.content.toLowerCase().startsWith('@help')){
      friendMessage.author.sendMessage('The commands are: @skin, @emote, @pickaxe, @backpack, @purpleskull, @pinkghoul, @about, @help')
    }
  })
  
  
 
   
  //invite and friend inv accept
  var partyAccept = true
  var friendAccept = true
  

client.on('friend:message', (friendMessage) => {
  console.log(`Message from party member: ${friendMessage.content}`);
  if (friendMessage.content.toLowerCase().startsWith('@about')) {
    friendMessage.author.sendMessage('Hey Welcome To Spark Bot, Developed By Hamed And Doge, To View The List Of Commands Do @help And Join Our Discord https://discord.io/fnspark And Thanks For Your Time Have Fun Using Spark Bot.');
    
  }
});



  client.on('friend:request', (req) => {
    if(friendAccept = true){
      req.accept()
    }
  });




client.on('party:invite', (inv) => {
    if (partyAccept = true){
      inv.accept()
      client.party.me.setOutfit('CID_029_Athena_Commando_F_Halloween', [{ channel: 'Material', variant: 'Mat3' }])
      client.party.me.setLevel(config.level);
    }
  });

  


  client.on('deviceauth:created', (da) => writeFile('./deviceAuth.json', JSON.stringify(da, null, 2)));
  client.on('party:member:message', handleCommand);
  client.on('friend:message', handleCommand);
 
  

  await client.login(); 
  console.log(`Logged in as ${client.user.displayName}`)
  
})();
