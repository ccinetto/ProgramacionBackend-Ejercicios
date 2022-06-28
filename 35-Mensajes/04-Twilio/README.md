1. Crear una cuenta en Twilio
2. En la seccion de Phone Numbers hacer click en Verified Caller IDs
3. hacer click en Add a new Called ID e ingresar nuestro numero de celular
4. Obtener de Twilio la siguiente informacion
   - ACCOUNT SID
   - AUTH TOKEN
   - PHONE NUMBER
5. crear las siguientes variables de entorno en el .env

   - TWILIO_ACCOUNT_ID=yourTwilioId
   - TWILIO_TOKEN=yourTwilioToken
   - TWILIO_CELLPHONE=+123456789

6. npm start
7. Ejecutar un POST Request al endpoint /send-message y enviar en el body el numero a quien queremos enviar el mensaje y el contenido
   Ej:
   {
   "destination":"+541168796601",
   "content":"mensaje para el mundo"
   }
8. Al recibir el 200, un mensaje de texto nos habra llegado a nuestro celular
