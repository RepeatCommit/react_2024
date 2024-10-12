
import axios, {AxiosResponse} from "axios";
import {IPost} from "../../model/IPost";

let axiosInstnce = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers:{"Content-Type": 'application/json'},
})

const getAllPosts = ():Promise<AxiosResponse<IPost[]>> => {
    return axiosInstnce.get('/posts')
}

const getPostsOfUser = (userId: number):Promise<AxiosResponse<IPost[]>> => {
    return axiosInstnce.get('/posts?userId=' + userId)
}


const getPost = async (id:number):Promise<AxiosResponse<IPost>> => {
    return await axiosInstnce.get('/post/' + id)
}
export {
    getAllPosts,
    getPost,
    getPostsOfUser

}