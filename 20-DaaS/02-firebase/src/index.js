
import { readAllUsers, readSpecificUser } from "./crud/leer";
import { addUser } from "./crud/agregar";
import { updateUser } from "./crud/update";
import { deleteUser } from "./crud/borrar";

/**
 * Ir descomentando los casos para probarlos
 */

/**
 * --------------------------------------------------------------------------------------
 * 1) Leer todos los documentos
 * --------------------------------------------------------------------------------------
 */
// readAllUsers().then((data) => console.log(data));


/**
 * --------------------------------------------------------------------------------------
 * Leer un Documento en especial. hay que pasarle la key del documento
 * --------------------------------------------------------------------------------------
 */
// readSpecificUser('4DynppXyZJWPui88JdBy').then((data) => console.log(data));

/**
 * --------------------------------------------------------------------------------------
 * Agregar un Docuemnto nuevo. hay que pasarle la data como objeto
 * --------------------------------------------------------------------------------------
 */
// const data = {
//     "first": "Liam222233333",
//     "last": "Ragozzine",
//     "address": "133 5th St., San Francisco, CA",
//     "birthday": "05/13/1990",
//     "age": "30"
// };

// addUser(data)


/**
 * --------------------------------------------------------------------------------------
 * Leer un Docuemnto en especial. hay que pasarle la key del documento

 * --------------------------------------------------------------------------------------
 */
// const dataNueva = {
//     "first": "Liam3",
//     "last": "Ragozzine3",
// }

// const key = '4DynppXyZJWPui88JdBy';
// updateUser(key,dataNueva).then(data => console.log(data))


/**
 * --------------------------------------------------------------------------------------
 * Borrar un Docuemnto en especial. hay que pasarle la key del documento
 * --------------------------------------------------------------------------------------
 */
// const key = '4DynppXyZJWPui88JdBy';
// deleteUser(key);
    
