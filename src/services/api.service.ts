import axios from "axios";
import {IProduct} from "../models/IProduct";
import {DummyResponse} from "../models/DummyResponse";


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}

});



export const apiService = {
    products: {
        getAll: async (page:number):Promise<DummyResponse & {products:IProduct[]}> => {
            const skip = (page -1 )* 30
         const {data} =   await axiosInstance.get<DummyResponse & {products:IProduct[]}>('/products', {
                params: {
                    skip: skip
                }
            })

            return data;
        }
    }
}