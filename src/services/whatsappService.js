const https = require("https");
function sendMessageWhatsApp(data){
  const options ={
    host :"graph.facebook.com",
    path : "/v15.0/103761159215020/messages",
    method :"POST",
    body : data,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer EAAJiUZCD3ZANIBADP4foPwMZCyfT2ZCZCZAHesxiTD7736HZC58j8ZAUnZAKI93IItZAyLnuyZCcW0ctgQQ9FUlN0f4yqMRLnPDzuVZCixFDcH30rBYd5W9R2BurrOZAzmq00xxjRrTP8sNrO7du0A2LBEVz6WZAwx3EhZCgI0NbJaj6knmVd95cdMZBZCelXTgZAZAIZCK10mPdJC0OQm581QZDZD",

    }

  };
  const req = https.request(options, res =>{
    res.on("data", d=>{
      process.stdout.write(d);
    });
  });
  req.on("error", error =>{
    console.error(error);
  });
  req.write(data);
  req.end();
}

module.exports ={
  sendMessageWhatsApp
};