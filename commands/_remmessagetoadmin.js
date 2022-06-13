/*CMD
  command: /remmessagetoadmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: el siguiente mensaje sera mandado directamente al administrador del grupo

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var id = data.user.telegramid;
var name = data.user.username;

Bot.sendMessageToChatWithId(1079595332,name + " te a mandado el siguiente mensaje\n\n " + data.message)

Bot.sendMessage("tu mensaje fue enviado al administrador");
