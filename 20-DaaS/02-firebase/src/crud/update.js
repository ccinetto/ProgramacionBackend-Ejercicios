import { UserDB } from "../services/db";
import { readSpecificUser } from "./leer";
export const updateUser = async (id,data) => {
    const miDoc = UserDB.doc(id);

    console.log(miDoc);

    //Chequear si existe sino no seguir.
    await UserDB.doc(id).update(data);
    console.log('salio bien');
    return readSpecificUser(id);
}