/*CMD
  command: /cambeve
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

var mensaje = data.message;

var  nm = Bot.getProperty("cual");

if( nm == 1)
{
  Bot.setProperty("eve1",mensaje,"string");
}

if( nm == 2)
{
  Bot.setProperty("eve2",mensaje,"string");
}

if( nm == 3)
{
  Bot.setProperty("eve3",mensaje,"string");
}

if( nm == 4)
{
  Bot.setProperty("eve4",mensaje,"string");
}

Bot.sendMessage("evento " + nm + " fue agregado correctamente");
