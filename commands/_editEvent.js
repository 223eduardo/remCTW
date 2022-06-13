/*CMD
  command: /editEvent
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var nm = data.message;

  Bot.setProperty("cual",nm,"float");
  Bot.sendMessage("contenido del evento?");
  Bot.runCommand("/cambeve");

