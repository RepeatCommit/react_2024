import axios from "axios";
import {IUserToken} from "../models/IUserToken";
import {IProduct} from "../models/IProduct";
import {retriveLocalStorage} from "../helpers/helpers";
import {IBaseResponseModel} from "../models/IBaseResponseModel";
import {ITokenPair} from "../models/ITokenPair";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers:{}

});

const login = async ():Promise<IUserToken> => {

 let {data: userToken} = await axiosInstance.post<IUserToken>("/login", {
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 1

    });
 localStorage.setItem("user", JSON.stringify(userToken));
 return userToken;

}

const loadAuthProducts = async (): Promise<IProduct[]> => {

  let {data} =   await axiosInstance.get< IBaseResponseModel & {products: IProduct[]}>('/products',{
        headers:{
            Authorization: 'Bearer ' + retriveLocalStorage<IUserToken>("user").accessToken
        }
    });
  return data.products;
}

const refresh = async () =>{
    console.log('refresh');
    const iUserToken = retriveLocalStorage<IUserToken>("user")
   const  {data} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken:iUserToken.refreshToken,
        expiresInMins: 1
    });
   iUserToken.refreshToken = data.refreshToken
    iUserToken.accessToken = data.accessToken
    localStorage.setItem("user", JSON.stringify(iUserToken));
}








export {login,loadAuthProducts,refresh};