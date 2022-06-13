/*CMD
  command: /addbal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: cantidad?

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("phone",data.message, "string");

Bot.sendMessage("agregado");
