const Discord = require('discord.js');

const searchBot = new Discord.Client();
const policeBot = new Discord.Client();

const searchToken = process.env.TOKEN1;
const policeToken = process.env.TOKEN1;


searchBot.on('ready', () => {

    console.log("SearchBot Ready !");
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
  var lCommand;
  var lRoom;
  var lSize;
  var lGrade;
  var lType;

  var lSearch1 = " est actuellement en recherche de joueur(s)\n:black_circle: Salon ";
  var lSearch2 = "\n:black_circle: Place(s) disponible(s) : ";
  var lSearch3 = "\n:black_circle: Grade(s) minimum recherché(s) : ";
  var lSearch4 = " \n:black_circle: Type de match : ";
  var lSearchError = "on dirait qu'il manque quelque chose à votre commande, veuillez la remplir comme ceci :\n\n!player_Nom Du Salon_Places Disponibles_Grade Minimum_Type De Match\n\nexemple : !player_Alpha_3_Or_Casu";

  lArray = lMessage.split("_");
  lCommand = lArray[0];

  if(lCommand === "!player")
  {
    lRoom = lArray[1];
    lSize = lArray[2];
    lGrade = lArray[3];
    lType = lArray[4];


    if(lRoom ==undefined || lSize==undefined|| lGrade==undefined || lType==undefined || lRoom =="" || lSize==""|| lGrade=="" || lType=="")
    {
      message.reply(lSearchError);
      return;
    }

    message.guild.channels.find("name", "recherche-de-joueurs").sendMessage(message.author+lSearch1+lRoom+lSearch2+lSize+lSearch3+ lGrade+lSearch4+lType);
    message.reply("Votre message a bien été posté sur le channel : [recherche-de-joueurs]");
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
    var lRoom;
    var lSize;
    var lGrade;
    var lType;


    lArray = lMessage.split("_");
    lCommand = lArray[0];




// commande !command

    var lMess1 = "Voici les commandes : \n\n:arrow_forward:  Afficher les règles du serveur : !rules";
    var lMess2 = "\n\n:arrow_forward:  Passer une annonce de recherche joueur (seulement dans le chan recherche joueur) : ";
    var lMess3 = "\n!player_Nom Du Salon_Places Disponibles_Grade Minimum_Type De Match";
    var lMess4 = "\nexemple : !player_Alpha_3_Or_Casu";
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




  });
