/*CMD
  command: /start_2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: bot diseñada para administrar dentro del grupo CTWorkers exclusivamente
  keyboard: 🔰Información🔰,🌐grupos🌐\n,🥳Eventos🥳,📒tareas📒\n,💵balance💵
  aliases: 
CMD*/


//Bot.sendMessage(":::::::::::");
var id = chat.id;
if(id != 67658317)
{
  Bot.sendMessage("seras bloqueado de este bot ya que este no es el grupo oficial de CTWorkers");
  Bot.blockChat(id);
}
