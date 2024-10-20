import axios from "axios";
import {IUser} from "../models/IUser";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'

});
export const getUser = async (id:string):Promise<IUser> => {
  let {data} =   await axiosInstance.get<IUser>('/user/' + id);
  return data;
}