/*CMD
  command: /eventsctw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🥳eventos🥳
CMD*/

var event1 = Bot.getProperty("eve1");
var event2 = Bot.getProperty("eve2");
var event3 = Bot.getProperty("eve3");
var event4 = Bot.getProperty("eve4");

if(event1 != "")
{
Bot.sendMessage(event1);
}
if(event2 != "")
{
Bot.sendMessage(event2);
}
if(event3 != "")
{
Bot.sendMessage(event3);
}
if(event4 != "")
{
Bot.sendMessage(event4);
}


var id = chat.id;
if(id != 67658317)
{
  Bot.sendMessage("seras bloqueado de este bot ya que este no es el grupo oficial de CTWorkers");
  Bot.blockChat(id);
}
