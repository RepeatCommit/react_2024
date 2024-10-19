import axios from "axios";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

});



export const getPosts = async ():Promise<IPost[]> => {
    let {data} = await axiosInstance.get<IPost[]>('/posts');
    return data
}