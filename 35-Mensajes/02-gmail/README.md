1. Ir a tu cuenta personal de google
2. Seleccionar "Gestionar tu cuenta de google"
3. Activar la verificacion de dos pasos si es que no se tiene activada
4. En la seccion de seguridad ir a "Contraseña de aplicaciones"
5. Generar una nueva contraseña de aplicacion. Esta va a ser nuestra password para usar con nodemailer nuestro mail

   PORT=your-app-port
   GMAIL_EMAIL=your-email@gmail.com
   GMAIL_PASSWORD=your-gmail-application-password
   GMAIL_NAME=your-name

6. NPM Install
7. npm run start
8. Hacer un post request to http://localhost:PORT/api/send-email y enviar en el body "dest", "subject" y "content"
9. Si la respiesta es 200 vas a recibir un mail en la casilla de destination

https://www.youtube.com/watch?v=KjheexBLY4A
