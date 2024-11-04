import {ICommentModel} from "./ICommentModel";

export interface IPostModel {
    id: number;
    title: string;
    body: string;
    userId: number;
    comments: ICommentModel[]
}