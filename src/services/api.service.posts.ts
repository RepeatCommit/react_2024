import axios, {AxiosResponse} from "axios";
import {IComment} from "../models/IComment";


const axiosInstance =  axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": "application/json"}
});

const getComments = async ():Promise<AxiosResponse<IComment[]>> => {
    return  await axiosInstance.get<IComment[]>('/comments');

};

const getComment = async (id: number):Promise<AxiosResponse<IComment>> => {
    return  await axiosInstance.get<IComment>('/comments/' +id);

};

const getCommentsOfUser = async (userId:number):Promise<AxiosResponse<IComment[]>> => {
    return  await axiosInstance.get('/comments?userId=' + userId);

}

export{
    getComment,
    getCommentsOfUser,
    getComments
}