1. Ir a tu cuenta de AWS
2. Buscar el Servicio "Simple Notification Service"
3. en el panel de la izquierda elegir "Temas"
4. Hacer click en "Crear un Tema"
5. En tipo elegir "Estandar" y elegir un nombre para crear nuestro tema
6. Ir hasta el final y hacer click en "crear un tema"
7. Copiar el ARN de nuestro tema (Este es el identificador de nuestro tema, donde vamos a enviar los mensajes)
8. Debajo del tema elegir la opcion "Crear una subscripcion"
9. En el protocolo elegir "Correo electronico" y en punto de enlace colocar el email de ustedes
10. Ir hasta el final y hacer click en "Crear una subscripcion"
11. Les va a llegar a su casilla de correo un mail de AWS pidiendo que confirmen la subscripcion. Abrirlo y hacer click en "confirm subscription"
12. Crear claves de acceso programatico

- En la parte superior derecha hacer click en donde aparece su nombre de usuario de aws
- Elegir mis credenciales de seguridad
- Elegir la opcion "Claves de acceso (ID de clave de acceso y clave de acceso secreta)"
- Hacer click en "crear una clave de acceso"
- Descargar las claves

12. En el codigo crear las siguientes variables de entorno
    SNS_ARN=arn-del-paso-7
    AWS_ACCESS_KEY_ID=AWSAccessKeyId
    AWS_SECRET_ACCESS_KEY=AWSSecretKey
    AWS_REGION=region-donde-crearon-el-tema

13. hacer un post request a /send-email y enviar en el body el contenido del mensaje
14. al recibir un 200, verificar que en su casilla de mail haya llegado la notificacion

NOTA:
Adicionalmente podemos ejecutar un POST al endpoint /subscribe y enviar en el body el email en el cual queremos recibir las notificaciones
Esto va a crearnos la subscripcion automaticamente y nos va a llegar el mail para que confirmemos la subscripcion

NOTA2:
ver listado de precios de SNS y capa gratuita
https://aws.amazon.com/es/sns/pricing/

NOTA3:
mas sobre SNS
https://docs.aws.amazon.com/es_es/sns/latest/dg/welcome.html
