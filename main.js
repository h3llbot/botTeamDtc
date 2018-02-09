// SALON RANKED :
var rankedArray = new Array("M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");

const Discord = require('discord.js');
const searchBot = new Discord.Client();
const policeBot = new Discord.Client();

const searchToken = process.env.TOKEN1;
const policeToken = process.env.TOKEN2;

searchBot.on('ready', () => {

    console.log("SearchBotTest Ready !");
});

policeBot.on('ready', () => {
  
      console.log("PoliceBot Ready !");
});

searchBot.login(searchToken);
policeBot.login(policeToken);

// ----------------- SEARCH BOT -------------------------------

searchBot.on('message', message => {

  var lMessage = message.content;
  var lArray = new Array();
  var lCommand; // commande du bot
  var lRoom; // nom de la salle
  var lRoomFirstLetter; // premiere lettre du nom de la room
  var lSize; // nombre de places disponible dans la salle
  var lGrade; // grade recherché
  var lType; // type de match
  var lMember; // membre à l'origine du message

  // message publié par le bot
  var hp = "📣 ";
  var lSearch1 = " est actuellement en recherche de joueur(s) 📣\n\n▶ ";
  var lSearch2 = "\n▶ Place(s) disponible(s) : ";
  var lSearch3 = "\n▶ Grade(s) minimum recherché(s) : ";
  var lSearch4 = "\n▶ Type de match : ";
  
  lArray = lMessage.split("_");
  lCommand = lArray[0];


  // COMMANDE PLAYER

  if(lCommand === "!player")
  {
    if(message.member.voiceChannel != undefined)
    {
      
        lRoom = message.member.voiceChannel.name;
        lRoomFirstLetter = lRoom.toString().slice(9,10);
        lSize = 5 - message.member.voiceChannel.members.size;
        
    
  switch (lRoomFirstLetter) {
            case 'A': lType = "RAINBOW SIX  - CASUAL"
            break;
            case 'B': lType = "RAINBOW SIX  - CASUAL"
            break;
            case 'C': lType = "RAINBOW SIX  - CASUAL"
            break;
            case 'D': lType = "RAINBOW SIX  - CASUAL"
            break;
            case 'E': lType = "RAINBOW SIX  - CASUAL"
            break;
            case 'F': lType = "RAINBOW SIX  - RANKED"
            break;
            case 'G': lType = "RAINBOW SIX  - RANKED"
            break;
            case 'H': lType = "RAINBOW SIX  - RANKED"
            break;
            case 'I': lType = "RAINBOW SIX  - RANKED"
            break;
            case 'J': lType = "RAINBOW SIX  - RANKED"
            break;
            case 'K': lType = "P.U.B.G.";
            lSize--;
            break;
            case 'L': lType = "P.U.B.G.";
            lSize--;
            break;
            case 'M': lType = "P.U.B.G.";
            lSize--;
            break;
            case 'N': lType = "P.U.B.G.";
            lSize--;
            break;
            case 'O': lType = "P.U.B.G.";
            lSize--;
            break;
            case 'P': lType = "FORTNITE"
            break;
            case 'Q': lType = "FORTNITE"
            break;
            case 'R': lType = "FORTNITE"
            break;
            case 'S': lType = "ESCAPE FROM TRAKOV"
            break;
            case 'T': lType = "ESCAPE FROM TRAKOV"
            break;
            case 'U': lType = "ESCAPE FROM TRAKOV"
            break;
            case 'V': lType = "OVERWATCH"
            break;
            case 'W': lType = "OVERWATCH"
            break;
            case 'X': lType = "OVERWATCH"
            break;
            case 'Y': lType = "JEU RANDOM"
            break;
            case 'Z': lType = "JEU RANDOM"
            break;
          default: lType = "JEU RANDOM"

        }

        if(lType === undefined) lType ="JEU RANDOM";

    
        lGrade = lArray[1];
      
        if(lGrade==undefined || lGrade=="")
        {
          lGrade = "tous niveaux acceptés (vous pouvez préciser un niveau minimum souhaité || exemple: !player_@or)";
        }
    
        message.guild.channels.find("name", "recherche-de-joueurs").send(hp+message.author+lSearch1+lRoom+lSearch2+lSize+lSearch3+lGrade+lSearch4+lType);
        message.reply("Votre message a bien été posté sur le channel : [recherche-de-joueurs]");
    }
    else{
      lChannel = message.channel.name.toString();
      message.guild.channels.find("name", lChannel).send("Vous devez être connecté dans un channel pour éxécuter cette commande");
      return;
    }
  }
});


// ----------------- POLICE BOT -------------------------------

policeBot.on('guildMemberAdd',function(member)
{
  member.createDM().then(function(channel)
  {
    return channel.send("Bienvenue sur le channel de la team DTC "+member.displayName+ " !\n Tu peux taper !rules pour connaître les règles ou !command pour voir la liste des commandes disponibles. \nUne commande est disponible pour rechercher des équipiers. \nEn cas de soucis fait appel à un admin. Bon jeu chez les DTC !");
  });
});

policeBot.on('message', message => {
  
    var lMessage = message.content;
    var lArray = new Array();
    var lCommand;
    var lReportedPlayer;
    var lMotif;
    var lReportError= "Il semble que la commande !report n'est pas complète.\nPour signaler un membre à l'équipe de modération : !report_Pseudo exact du membre_Motif";
  
   
    lArray = lMessage.split("_");
    lCommand = lArray[0];
    lReportedPlayer = lArray[1];
    lMotif = lArray[2];

// commande !command

    var lMess1 = "Voici les commandes : \n\n:arrow_forward:  Afficher les règles du serveur : !rules";
    var lMess2 = "\n\n:arrow_forward:  Passer une annonce de recherche joueur (seulement dans le chan recherche joueur) : ";
    var lMess3 = "\n!player pour rechercher des joueurs de tous les grades";
    var lMess4 = "\n!player_@grade pour recherche des joueurs de grade minimum précis || exemple !player_@or ou !player_@bronze\n les grades doivent être écrit aainsi et sont les suivants : @cuivre  @bronze  @argent  @or  @platine";
    var lMess5 = "\n\n:arrow_forward: Signaler un membre à l'équipe de modération : !report_Pseudo exact du membre_Motif";
    var lMess6 = "\nexemple : !report_leJoueur_s'amuse à mettre de la musique dans le channel";

    if(lCommand === "!command")
    {
      message.reply(lMess1+lMess2+lMess3+lMess4+lMess5+lMess6);
    }

// commande !help

    if(lCommand === "!help")
    {
      message.reply("tapez !command pour voir les commandes disponibles");
    }
  
// commande !rules
    var lMess7 = "Voici les règles de ce discord";
    var lMess8 = "\n\n:arrow_forward:  LES BASES :";
    var lMess9 = "\n- Pas de politique, religion, ou d'insultes ou photos à charactère nazi, raciste, ou homophobe.";
    var lMess10 = "\n- Respectez vous vous même et respecter les autres.";
    var lMess11 = "\n- Respectez les admins, les modos, et le boulot qu'ils font. Ne spammez pas les channels";
    var lMess12 = "\n\n:arrow_forward: IN GAME RANKED:";
    var lMess13 = "\n- On ne quitte pas une game en cours. Ne lancez pas de game si vous n'avez pas le temps.";
    var lMess14 = "\n- On ne quitte pas une game en cours. Si vous ragez, faites le en silence, et sans vous casser de la game comme un fragile.";
    var lMess15 = "\n- On ne hurle pas dans son putain de micro, mais on donne des infos claires, et calmement.";
    var lMess16 = "\n\n:arrow_forward: TIPS: ";
    var lMess17 = "\n- tapez !command pour voir la liste des commandes disponibles.";
    
    if(lCommand === "!rules")
    {
      message.reply(lMess7+lMess8+lMess9+lMess10+lMess11+lMess12+lMess13+lMess14+lMess15+lMess16+lMess17);
    }


// commande !report

    if(lCommand ==="!report")
    {
   
      if(lReportedPlayer == undefined || lMotif==undefined || lReportedPlayer == "" || lMotif=="")
      {
        message.reply(lReportError);
        return;
      }
      message.guild.channels.find("name", "joueurs-warning").sendMessage(message.author+" a signalé le membre "+lReportedPlayer+ "pour le motif suivant : "+ lMotif);
      message.reply("Votre message a bien été envoyé aux admins / " + message.author+" a signalé le membre "+lReportedPlayer+ " pour le motif suivant : "+ lMotif);
   
    }


  });
