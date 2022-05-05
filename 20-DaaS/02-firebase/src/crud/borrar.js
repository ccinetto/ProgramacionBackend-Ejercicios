import { UserDB } from "../services/db";

export const deleteUser = async(id) => {
    await UserDB.doc(id).delete()
    console.log('done');
}
