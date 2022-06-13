/*CMD
  command: /tareasctw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 📒tareas📒
CMD*/

Bot.sendMessage("tarea 1 \n\nSe paga en digibyte si les interesa\n\nhttps://t.me/airdrop_dgbbot?start=1079595332\n\nEntren al bot, la recompensa total se dividirá en las personas que entren al enlace \n\nMandar capturas a  @eduardoWap\n\nSe pagara el dia 11 de junio a las 12:00 pm");

var id = chat.id;
if(id != 67658317)
{
  Bot.sendMessage("seras bloqueado de este bot ya que este no es el grupo oficial de CTWorkers");
  Bot.blockChat(id);
}
