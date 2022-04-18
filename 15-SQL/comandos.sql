SHOW DATABASES;
CREATE DATABASE pepito;
USE pepito;

CREATE TABLE trabajadores (
idTrabajador INT PRIMARY KEY AUTO_INCREMENT, 
nombre VARCHAR(20) NOT NULL, 
puesto VARCHAR(30) NOT NULL
);


INSERT INTO trabajadores
(nombre, puesto)
VALUES 
("felipe", "RH" ),
("carlos", "empleado" ),
("cristian", "gerente" );


SELECT nombre,puesto
FROM trabajadores
WHERE puesto != "RH";


UPDATE trabajadores 
SET puesto="empleado"
WHERE idTrabajador=1;


DELETE FROM trabajadores 
WHERE idTrabajador =3;


DROP TABLE trabajadores;
DROP DATABASE pepito;