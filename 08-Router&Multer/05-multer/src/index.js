const express = require('express');
const multer = require('multer');
const fs = require('fs');
/**En dest ponemos la carpeta donde vamos a guardar los archivo. la salida de esta llamda la usaremos
 * para utilizarla en las rutas.
 */
const upload = multer({ dest: './uploads' });

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

/**Upload.single se usa para subir 1 solo archivo */
/**Recibe como parametro el nombre del param de la request */
app.post('/single', upload.single('imagen'), (req, res) => {
  try {
    console.log(req.file);
    res.send(req.file);
  } catch (err) {
    res.send(400);
  }
});

/**
 * Opcion2
 * Aca podemos guardar directamente el archivo con extension y todo
 * en la key destination, ponemos una funcion que ubicará el archivo a subir en la carpeta que querramos
 * en la key filename, ponemos una funcion que pondra como nombre al archivo subido el timestamp+su nombre original
 * Al usar originalName (que viene desde el parametro file) guardamos el archivo con el nombre que viene
 * NOTA: La carpeta debe estar creada o falla.
 * Una alternativa es crear la carpeta si no existe en la funcion destination
 */

const folderName = './uploads';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(folderName)) {
      console.log(`Carpeta ${folderName} no existe. la creamos`);
      fs.mkdirSync(folderName);
    }

    cb(null, folderName);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadMejorado = multer({ storage: storage });

app.post('/single-mejorado', uploadMejorado.single('imagen'), (req, res) => {
  try {
    res.send(req.file);
  } catch (err) {
    res.send(400);
  }
});

/**OPCION3 CARGAR MULTIPLES ARCHIVOS
 * Idem anterior solo que se llama al metodo array
 */

const folderNameMultiple = './folder2';
const multipleFilesStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(folderNameMultiple)) {
      console.log(`Carpeta ${folderNameMultiple} no existe. la creamos`);
      fs.mkdirSync(folderNameMultiple);
    }

    cb(null, folderNameMultiple);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadMultiple = multer({ storage: multipleFilesStorage });

app.post('/multiple', uploadMultiple.array('imagenes'), (req, res) => {
  try {
    res.send(req.files);
  } catch (err) {
    res.send(400);
  }
});
