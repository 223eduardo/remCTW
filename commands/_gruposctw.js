/*CMD
  command: /gruposctw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🌐grupos🌐
CMD*/

Bot.sendMessage("esté es él enlace al el grupo CTWorkers:\nhttps://t.me/+r_hkB6LGHEUyZDAx\n\nesté es él enlace del canal CTWorkers: https://t.me/CTWorkers\n\nesté es el enlace del grupo de NFTs CTWORKERS\nhttps://t.me/NFTsct");

var id = chat.id;
if(id != 67658317)
{
  Bot.sendMessage("seras bloqueado de este bot ya que este no es el grupo oficial de CTWorkers");
  Bot.blockChat(id);
}

