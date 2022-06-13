/*CMD
  command: /panel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var id = chat.id;

if(id != 67803561)
{
  Bot.blockChat(id);
}
if(id == 67803561)
{
  Bot.sendMessage("iniciando grupo");
  Bot.runCommand("/panel_ini")
  }
