const whatsappModel = require("../shared/whatsappModels");
const whatsappService = require("../services/whatsappService");

function Process(textUser, number) {
  textUser = textUser.toLowerCase();
  var models = [];
  //hola que tal
  if (textUser.includes("hola")) {
    //Saludar
    var model = whatsappModel.MessageText("Hola, un placer en saludarte", number);
    models.push(model);
    //Listado
    var modelList = whatsappModel.MessageList(number);
    models.push(modelList);
  }
  else if (textUser.includes("gracias")) {
    //agradecimiento
    var model = whatsappModel.MessageText("Gracias a usted por confiar en nosotros", number);
    models.push(model);

  }
  else if (textUser.includes("adios") ||
    textUser.includes("chao") ||
    textUser.includes("hasta luego") ||
    textUser.includes("bye") ||
    textUser.includes("me voy")
  ) {
    //Despedir
    var model = whatsappModel.MessageText("Que estes muy bien, hasta luego", number);
    models.push(model);
  }
  else if (textUser.includes("comprar")) {
    //comprar
    var model = whatsappModel.MessageComprar(number);
    models.push(model);
  }
  else if (textUser.includes("vender")) {
    //vender
    var model = whatsappModel.MessageText("Registrate en el siguiente formulario para evaluarte: https://docs.google.com/forms/d/1gS9b4iWnb5bw_0K4dEftyf-J4P2rlqEymGBT9Z6y1a8/edit ", number);
    models.push(model);
  }
  else {
    //no entiendo
    var model = whatsappModel.MessageText("No entiendo tu solicitud", number);
    models.push(model);
  }



  models.forEach(model => {
    whatsappService.sendMessageWhatsApp(model);

  });


}

module.exports = {
  Process
}