<<<<<<< HEAD
export interface Response {
    ok: boolean;
    msg?: string;
    token?: string;
    }
    
    //Interrogante significa opcional
=======
import { User } from "./user";

export interface Response {
  ok: boolean;
  msg?: string;
  token?: string;
  data?: User;
}
/** ? Opcional */
>>>>>>> 27fc829742dc4f5ac99ab4053044a1193b9d1942
