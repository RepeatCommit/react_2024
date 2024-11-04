import React, {useEffect, useState} from 'react';
import {useStore} from "../context/store";
import {IPostModel} from "../models/IPostModel";
import {mergePostComment} from "../helper/helper";




const TotalPages = () => {
   let {postSlice:{allPosts},commentSlice:{allComments}} = useStore();
    const [posts, setPosts] = useState<IPostModel[]>([]);

   
    useEffect(() => {
    setPosts(mergePostComment(allPosts, allComments))


        
    }, []);




    return (
        <ul>
            {
                posts.map((post)=><li>
                    <div>{post.title}</div>
                    <ol>
                        {
                           post.comments?.map((comment) =>(<li key={comment.id}>{comment.id}</li>))
                        }
                    </ol>


                </li>)
            }
        </ul>
    );
};

export default TotalPages;