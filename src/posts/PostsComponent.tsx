import React, {FC, ReactNode} from 'react';
import {IPost} from "../model/IPost";
import PostComponent from "../post/PostComponent";


type IPostsProps = { posts:IPost[]} & {children?: ReactNode};

const PostsComponent: FC<IPostsProps> = ({posts}) => {
   console.log(posts);

    return (
        <div>
            {
                posts.map(post => <PostComponent
                    key={post.id}
                    id={post.id}
                    userId={post.userId}
                    title={post.title}
                    body={post.body} />

                )

            }
            </div>
    );
};

export default PostsComponent;