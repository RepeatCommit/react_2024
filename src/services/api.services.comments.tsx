import axios from "axios";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'

});


export const getComments = async ():Promise<IComment[]> => {
    let  {data} = await axiosInstance.get<IComment[]>('/comments');
    return data;
}