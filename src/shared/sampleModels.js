function sampleText(textResponse, number) {
  const data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": number,
    "text": {
      "body": textResponse
    },
    "type": "text"
  });
  return data;
}

function sampleImage(number) {
  const data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": number,
    "type": "image",
    "image": {
      "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/image_whatsapp.png"
    },
  });
  return data;
}
function sampleAudio(number) {
  const data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": number,
    "type": "audio",
    "audio": {
      "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
    },
  });
  return data;
}
function sampleVideo(number) {
  const data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": number,
    "type": "video",
    "video": {
      "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4"
    },
  });
  return data;
}
function sampleDocument(number) {
  const data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": number,
    "type": "document",
    "document": {
      "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf"
    },
  });
  return data;
}
function sampleButtons(number) {
  const data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": number,
    "type": "interactive",
    "interactive": {
      "type": "button",
      "body": {
        "text": "Confirmas tu registro"
      },
      "action": {
        "buttons": [
          {
            "type": "reply",
            "reply": {
              "id": "001",
              "title": "Si"
            }
          },
          {
            "type": "reply",
            "reply": {
              "id": "002",
              "title": "No"
            }
          }
        ]
      }
    },
  });
  return data;
}
function sampleList(number) {
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
function sampleLocation(number) {
  const data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": number,
    "type": "location",
    "location": {
      "latitude": "1.8149839554031801",
      "longitude": "-78.76433443216308",
      "name": "Restaurante Carapachos",
      "address": "Barrio Arciniegas, Avenida los estudiantes #Casa 183, Tumaco, San Andres de Tumaco, Nariño"
    },
  });
  return data;
}
module.exports = {
  sampleText,
  sampleImage,
  sampleAudio,
  sampleVideo,
  sampleDocument,
  sampleButtons,
  sampleList,
  sampleLocation
}