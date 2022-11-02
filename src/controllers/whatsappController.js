const VerifyToken = (req, res) => {
  try {
    var accessToken = "ADFAJHGADYUGQ12133JHDFJADFJABUI1333JSDF";
    var token = req.query["hub.verify_token"];
    var challenge = req.query["hub.challenge"];

    if (challenge != null && token != null && token == accessToken) {
      res.send(challenge);
    } else {
      res.status(400).send();
    }
  } catch (e) {
    res.status(400).send();
  }
}

const ReceivedMessage = (req, res) => {
  res.send("ReceivedMessage");
};

module.exports = {
  VerifyToken,
  ReceivedMessage,
}
