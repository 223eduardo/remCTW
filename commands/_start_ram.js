/*CMD
  command: /start_ram
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🔴iniciar🔴
CMD*/

var id = chat.id;

if(id == 67658317)
{
Bot.sendMessage("bot iniciada en en grupo CTWorkers");
Bot.runCommand("/start_2");
}
if(id != 67658317)
{
  Bot.sendMessage("seras bloqueado de este bot ya que este no es el grupo oficial de CTWorkers");
  Bot.blockChat(id);
}
