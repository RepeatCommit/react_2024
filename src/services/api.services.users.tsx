import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";


const axiosInstance =  axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": "application/json"}
});

const getUsers = async ():Promise<AxiosResponse<IUser[]>> => {
    return  await axiosInstance.get<IUser[]>('/users');

};

const getUser = async (id: number):Promise<AxiosResponse<IUser>> => {
     return  await axiosInstance.get<IUser>('/users/' +id);

};


export{
    getUsers,
    getUser,

}