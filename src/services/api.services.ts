import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import {baseUrl, urls} from "../components/urls/urls";


 const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}


});

export const userService = {
    getAll: async ():Promise<IUser[]> => {
        const response = await axiosInstance.get<IUser[]>(urls.users.base);
        return response.data;
    }
}
export const postService = {
    getAll: async ():Promise<IPost[]> => {
        const response = await axiosInstance.get<IPost[]>(urls.posts.base);
        return response.data;
    }
}
export const commentService = {
    getAll: async ():Promise<IComment[]> => {
        const response = await axiosInstance.get<IComment[]>(urls.comments.base);
        return response.data;
    }
}