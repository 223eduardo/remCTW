/*CMD
  command: /event
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: nuevo_evento
CMD*/

var event1 = Bot.getProperty("eve1");
var event2 = Bot.getProperty("eve2");
var event3 = Bot.getProperty("eve3");
var event4 = Bot.getProperty("eve4");

//mandar img
//[img](https://static.wikia.nocookie.net/rezero/images/1/11/Ram_-_Anime.png/revision/latest?cb=20161116222257&path-prefix=es)

/*
Bot.sendInlineKeyboard([ {title: "google", url: "http://google.com" }, {title: "other command", command: "/othercommand"} ], "Please make a choice.")
*/


//1
if(event1 != "")
{
  Bot.sendMessage("el evento 1 se puede editar");
}

if(event1 == "")
{
  Bot.sendMessage("evento 1 esta ocupado");
}

//2

if(event2 != "")
{
  Bot.sendMessage("el evento 2 se puede editar");
}

if(event2 == "")
{
  Bot.sendMessage("evento 2 esta ocupado");
}

//3

if(event3 != "")
{
  Bot.sendMessage("el evento 3 se puede editar");
}

if(event3 == "")
{
  Bot.sendMessage("evento 3 esta ocupado");
}

//4

if(event4 != "")
{
  Bot.sendMessage("el evento 4 se puede editar");
}

if(event4 == "")
{
  Bot.sendMessage("evento 4 esta ocupado");
}

Bot.sendMessage("manda el número del avento a editar");
Bot.runCommand("/editEvent");
