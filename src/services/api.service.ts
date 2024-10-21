import axios from "axios";
import { ITodo } from "../models/ITodo";
import {IDummyResponse} from "../models/IDummyResponse";


const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com/',
    headers: {'content-type': 'application/json'},
});



export const apiService = {
    todo: {
        getAll: async (page:number):Promise<IDummyResponse & {todos:ITodo[]}> => {
         const skip = (page - 1) * 30;

   const {data} =   await axiosInstance.get<IDummyResponse & {todos:ITodo[]}>('/todos',{
          params:{
              skip: skip
          }
      });

   return data;
}
    }
}