import {IPost} from "./IPost";
import {IComment} from "./IComment";


export type ICommentsWithPosts = IPost & {comments: IComment[]};