# Primero vamos a crear un usuario nuevo
curl -X GET "http://localhost:8080/newUser?username=dani&password=qwerty123"

#Luego ejecutamos artillery al endpoint de autenticacion bloqueante
#Su resultado lo vamos a plasmar en el archivo result_bloq.txt
artillery quick --count 10 -n 50 "http://localhost:8080/auth-bloq?username=dani&password=qwerty123" > result_bloq.txt

#Una vez que se haya ejecutado el script. tomar el nombre del archivo isolate y ejecutar
# node --prof-process [nombreArchivoIsolate].log > [archivoSalida].tx