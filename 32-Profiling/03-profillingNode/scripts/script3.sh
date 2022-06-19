# Primero vamos a crear un usuario nuevo
curl -X GET "http://localhost:8080/newUser?username=dani&password=qwerty123"

#Luego ejecutamos artillery a los dos endpoints
artillery quick --count 10 -n 50 "http://localhost:8080/auth-bloq?username=dani&password=qwerty123" > result_bloq.txt
artillery quick --count 10 -n 50 "http://localhost:8080/auth-nobloq?username=dani&password=qwerty123" > result_nobloq.txt