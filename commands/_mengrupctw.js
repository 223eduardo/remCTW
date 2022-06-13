/*CMD
  command: /mengrupctw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: mensaje a mandar?

  <<KEYBOARD

  KEYBOARD
  aliases: mandar_mensaje_al_grupo
CMD*/

Bot.sendMessageToChatWithId(-1001622069016,data.message);

Bot.sendMessage("enviado");
