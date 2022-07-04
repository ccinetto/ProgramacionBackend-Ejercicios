1. Ir a nuestra cuenta de Twilio
2. Ir a Messages => Settings => WhatsApp sandbox Settings
3. Habilitar el sandbox para utilizar whatsapp (esto se hace una unica vez)
4. Agregar el numero de telefono que nos indica el sandbox en nuestro celular
5. Enviarle por whastapp a ese numero el codigo que nos indica la pantalla (ej join oxygen-hello)

6. Enviar mensajes

   - npm start
   - Ejecutar un POST Request al endpoint /send-message y enviar en el body el numero a quien queremos enviar el mensaje y el contenido
     Ej:
     {
     "destination":"+5491112345678",
     "content":"mensaje para el mundo"
     }
   - opcionalmente podemos enviar una imagen en el campo picture con un url a la imagen
     Ej:
     {
     "destination":"+5491112345678",
     "content":"Hola, te mando un mensaje muy importante con foto incluida",
     "picture": "https://pbs.twimg.com/media/EnRuK1XW8AUL-WX.jpg"
     }

7. Recibir mensajes de forma local

   - npm start
   - ir a https://ngrok.com/ y crearse una cuenta
   - Seguir los pasos para descargar y configurar la aplicacion de ngrok (https://dashboard.ngrok.com/get-started/setup)
   - ejecutar ngrok indicandole en que puerto va a estar nuestra aplicacion de dev (./ngrok http 8080)
   - nos va a devolver una URL (ej https://29dd-190-16-91-70.eu.ngrok.io)
   - ir al sandbox de whatsapp de nuestro Twilio
   - en la parte de "WHEN A MESSAGE COMES IN" copiar la ul que nos da ngrok y agregarle el path de nuestro endpoint que
     va a recibir el mensaje (en este ejemplo el path es /api/receive, por lo que la url final quedaria
     https://29dd-190-16-91-70.eu.ngrok.io/api/receive )
   - enviar un mensaje al sandbox y ver como se recibe en el endpoint y se imprime el body

https://www.youtube.com/watch?v=K4lfY7qIP4Y
