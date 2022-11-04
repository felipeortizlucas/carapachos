function MessageText(textResponse, number) {
  const data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": number,
    "type": "text",
    "text": {
      "preview_url": true,
      "body": textResponse
    }
  });
  return data;
}

function MessageList(number) {
  const data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": number,
    "type": "interactive",
    "interactive": {
      "type": "list",
      "body": {
        "text": "Tengo estas opciones"
      },
      "footer": {
        "text": "Selecciona una de las siguientes para poder atenderte"
      },
      "action": {
        "button": "Ver opciones",
        "sections": [
          {
            "title": "Compra y vende productos",
            "rows": [
              {
                "id": "main-comprar",
                "title": "comprar",
                "description": "comprar los mejores productos para tu hogar"
              },
              {
                "id": "main-vender",
                "title": "vender",
                "description": "vende tus productos"
              }
            ]
          },
          {
            "title": "Centro de atencion",
            "rows": [
              {
                "id": "main-agencia",
                "title": "Agencia",
                "description": "Puedes visitar nuestra agencia"
              },
              {
                "id": "<main-contacto>",
                "title": "Contacto",
                "description": "Puedes contactarnos"
              }
            ]
          }
        ]
      }
    },
  });
  return data;
}
function MessageComprar(number) {
  const data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": number,
    "type": "interactive",
    "interactive": {
      "type": "button",
      "body": {
        "text": "Selecciona uno de los productos"
      },
      "action": {
        "buttons": [
          {
            "type": "reply",
            "reply": {
              "id": "option-laptop",
              "title": "Laptop"
            }
          },
          {
            "type": "reply",
            "reply": {
              "id": "option-computadora",
              "title": "Computadora"
            }
          }
        ]
      }
    },
  });
  return data;
}

module.exports = {
  MessageText,
  MessageList,
  MessageComprar
}