import {IUser} from "./IUser";


export interface IResponseModel {

    users: IUser[],
    total: number,
    skip: number,
    limit: number,
}