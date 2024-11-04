import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

export const mergePostComment =(posts:IPostModel[],comments:ICommentModel[]): IPostModel[] =>{

  let map:IPostModel[] =  posts.map((value:IPostModel) =>(
      {...value, comments: []}));


    for (const post of map) {
       for (const comment of comments) {
           if(post.id === comment.postId){
               post.comments.push(comment);

           }
       }



    }

    return map;
}