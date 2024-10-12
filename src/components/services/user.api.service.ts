import IUserModel from "../../model/IUserModel";
import axios, {AxiosResponse} from "axios";

let axiosInstnce = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
    headers:{"Content-Type": 'application/json'},
})

const getAllUsers = ():Promise<AxiosResponse<IUserModel[]>> => {
    return axiosInstnce.get('')
}

const getUser = async (id:number):Promise<AxiosResponse<IUserModel>> => {
    return await axiosInstnce.get('/users/' + id)
}
export {
    getAllUsers,
    getUser

}



