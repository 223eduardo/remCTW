/*CMD
  command: /imfothegrup
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER
CT Workers es un proyecto que está en desarrollo Su objetivo principal es el de ayudar a personas a conocer más sobre las Criptomonedas y proyectos de inversión así tambn el de realizar pequeñas tareas  pagadas .

¿ Que se propone abarcar el proyecto?

1. Educación sobre Criptomonedas 
2. Pagar por realizar tareas varias 
3. Comercio de NFT locales y externos 
4. Sorteos para miembros 
Entre otras cosas 

Actualmente los administradores se encuentran desarrollando una plataforma para que sea más sencillo de entender para usted .
Pido paciencia que esto es por y para ustedes cómo pioneros en el emprendimiento de este proyecto trabajamos para que todos puedan ganar de una manera fácil y sencilla
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🔰información🔰
CMD*/

var id = chat.id;
if(id != 67658317)
{
  Bot.sendMessage("seras bloqueado de este bot ya que este no es el grupo oficial de CTWorkers");
  Bot.blockChat(id);
}
