import axios from "axios";
import {IUser} from "../models/IUser";


   const axiosInstance = axios.create({
       baseURL: 'https://jsonplaceholder.typicode.com'

   });


    export const getUsers = async ():Promise<IUser[]> => {
       let  {data} = await axiosInstance.get<IUser[]>('/users');
      return data;
   }
