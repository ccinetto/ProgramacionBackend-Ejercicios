import { UserDB } from "../services/db";

export const readAllUsers = async () => {
    let resultado = await UserDB.get();

    let docs = resultado.docs;

    const output = docs.map(aDoc => ({
        id: aDoc.id,
        data: aDoc.data()
    }))

    return output;
}

export const readSpecificUser = async(id) => {
    let result = await UserDB.doc(id).get();
    
    //si no existe devolver error o algo asi
    return ({
        id: result.id,
        data: result.data(),
    });
}