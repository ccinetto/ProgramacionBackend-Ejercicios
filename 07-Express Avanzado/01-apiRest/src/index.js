const express = require('express');
/**
 * DATOS A MANIPULAR
 */
let productos = [
  {
    id: 1,
    nombre: 'Escuadra',
    precio: 200,
  },
  {
    id: 2,
    nombre: 'Transportador',
    precio: 50,
  },
];

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});

/**
 * DEFINICION RUTAS BASICAS
 */

/**
 * 01- GET General: Para obtener todos los Recursos
 * Ejecutando operacion de lectura de todos los productos
 * Vamos a responder con todos los productos que tenemos actualmente
 */

app.get('/productos', (req, res) => {
  res.json({
    data: productos
  })
  // /**Opcionalmente podemos agregar queries para hacer busquedas distintas y no traer todo*/
  // const filtroPrecio = req.query.price;
  // let data;

  // console.log(filtroPrecio);

  // if (filtroPrecio)
  //   data = productos.filter(
  //     (aProduct) => aProduct.precio >= Number(filtroPrecio)
  //   );
  // else data = productos;

  // res.json({
  //   data,
  // });
});

/**
 * 02- GET Especifico: Para obtener un recurso especifico
 * Ejecutando operacion de lectura de un producto en particular
 * Obtenemos el id que el cliente desea de la request
 */
app.get('/productos/:id', (req, res) => {
  console.log(req.params);
  const idBuscado = req.params.id;

  const producto = productos.find((aProduct) => aProduct.id == idBuscado);

  /** En caso de no encontrar el producto, respondemos con codigo 404 para indicar el error */
  if (!producto) {
    return res.status(404).json({
      msg: 'Product not found',
    });
  }

  /**Si encontramso el producto respondemos con su informacion */
  res.json({
    data: producto,
  });
});

/**
 * 03- POST : Creacion de un nuevo recurso
 * Ejecutando operacion de creacion de un nuevo recurso
 * Obtenemos la informacion del Body de la request
 * Para trabajar con el body se debe agregar
 *  - app.use(express.json()): para indicar que el body viene como JSON
 *  - app.use(express.urlencoded({ extended: true })) : Para decirle que puede venir info como no string
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/productos', (req, res) => {
  const body = req.body;
  console.log(body);

  /** Valido que la info que me mandaron este OK, sino respondo con 400 */
  if (
    !body.nombre ||
    !body.precio ||
    typeof body.nombre != 'string' ||
    typeof body.precio != 'number'
  ) {
    return res.status(400).json({
      msg: 'Necesito en el body el nombre (string) y el precio (number)',
    });
  }

  const nuevoProducto = {
    id: productos.length + 1,
    nombre: body.nombre,
    precio: body.precio,
  };

  productos.push(nuevoProducto);

  /**Estado 201: Objeto creado correctamente */
  res.status(201).json({
    data: nuevoProducto,
  });
});

/** 04- PUT/PATCH : Modificar los datos de un recurso existente */

app.put('/productos/:id', (req, res) => {
  console.log(req.params);
  const idBuscado = Number(req.params.id);
  const body = req.body;

  /**
   * To find the index of an object in an array, by a specific property:
   * Call the findIndex method on the array, passing it a function.
   * The function should return an equality check on the relevant property.
   * The findIndex method returns the index of the first element in the array, for which the callback function returns a truthy value.
   * If the callback function we pass to the findIndex method never returns a truthy value, the method returns -1.
   * https://bobbyhadz.com/blog/javascript-array-find-index-of-object-by-property#:~:text=Report%20Ad-,To%20find%20the%20index%20of%20an%20object%20in%20an%20array,a%20value%20in%20an%20array.
   */

  const posicion = productos.findIndex((aProduct) => aProduct.id === idBuscado);

  console.log(posicion);
  /** En caso de no encontrar el producto, respondemos con codigo 404 para indicar el error */
  if (posicion == -1) {
    return res.status(404).json({
      msg: 'Product not found',
    });
  }

  /** Valido que la info que me mandaron este OK, sino respondo con 400 */
  if (
    !body.nombre ||
    !body.precio ||
    typeof body.nombre != 'string' ||
    typeof body.precio != 'number'
  ) {
    return res.status(400).json({
      msg: 'Necesito en el body el nombre (string) y el precio (number)',
    });
  }

  productos[posicion].nombre = body.nombre;
  productos[posicion].precio = body.precio;

  /**Estado 201: Objeto creado correctamente */
  res.status(201).json({
    data: productos[posicion],
  });
});

/** 05- DELETE : Modificar los datos de un recurso existente */

app.delete('/productos/:id', (req, res) => {
  console.log(req.params);
  const idBuscado = Number(req.params.id);

  const posicion = productos.findIndex((aProduct) => aProduct.id === idBuscado);
  /** En caso de no encontrar el producto, respondemos con codigo 404 para indicar el error */
  if (posicion == -1) {
    return res.status(404).json({
      msg: 'Product not found',
    });
  }

  productos.splice(posicion,1);

  res.json({
    data: productos,
  });
});

/** 06- QUERYES : Se pueden hacer consultas para obtener datos en funcion de una query */

app.get('/productos/find', (req, res) => {
  console.log(req.query);

  res.json({
    data: productos,
  });
});
