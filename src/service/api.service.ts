import axios from 'axios';
import {FormPost} from "../model/FormPost";


let axiosInstance =  axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export  const apiService = {
    post:{
        savePost: async (data:FormPost)=>{
      const response = await axiosInstance.post('/posts',data)

       console.log(response);
        }
    }

}