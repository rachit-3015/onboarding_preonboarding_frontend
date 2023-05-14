import { myAxios } from "./Helper";

export const loginDataProvider =(user)=>{
    return myAxios.post("/",user)
    .then((response)=>response.data);
}