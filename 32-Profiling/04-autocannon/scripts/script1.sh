# Ejecutar el server con 0x

# Primero vamos a crear un usuario nuevo
curl -X GET "http://localhost:8080/newUser?username=dani&password=qwerty123"

#Luego ejecutamos autocannon al endpoint de autenticacion bloqueante y no bloqueante
autocannon -c 100 -d 15 'http://localhost:8080/auth-bloq?username=dani&password=qwerty123'

#Ver salida