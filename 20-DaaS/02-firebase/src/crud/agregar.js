import { UserDB } from "../services/db";
import { between } from '../utils';

/**
 * 
 * Para agregar un usuario, primero creamos una referencia a un documento con una key que nosotros querramos
 * para ello usamos el metodo doc de la coleccion que estamos usando
 * Si solo llamamos al metodo, FireStore nos crea la key se forma random. tambien podemos pasarle por parametro
 * la key del documento 
 */
export const addUser = async (data) => {
    try{
        //Si queremos poner nuestra propia key descomentamos linea 14-17 y comentamos linea 18
        // const randomKey = `miKey-${between(0,300000)}`;
        // console.log(randomKey);
        // const UserDocument = UserDB.doc(randomKey);

        const UserDocument = UserDB.doc();
        await UserDocument.create(data)      //vamos a crear un documento cuya key sea (algo generico)
                                                //a ese documento le metemos data en formato json
        console.log("salio todo bien!")        
    }
    catch(err){
        console.log("ERROR");
        console.log(err);
    }
}