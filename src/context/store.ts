import {IUserModel} from "../models/IUserModel";
import {create} from "zustand/react";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";


type StoreType = {
    userSlice:{
        allUsers:IUserModel[],
        loadUsers: (users:IUserModel[])=> void,

    },
    postSlice:{
        allPosts: IPostModel[],
        loadPosts: (posts:IPostModel[]) => void

    },
    commentSlice:{
        allComments: ICommentModel[],
        loadComments: (comments:ICommentModel[]) => void

    }
}
export const useStore =  create<StoreType>()((set) =>{
    return {
    userSlice: {
        allUsers: [],
             loadUsers:(users)          => {
            return set((state) => ({
                ...state,
                userSlice: {
                    ...state.userSlice,
                    allUsers: users,

                }
            }))


            }
        },

    postSlice: {
        allPosts: [],
        loadPosts: (posts) => {
            return set(state =>{
                return {
                    ...state,
                    postSlice: {
                        ...state.postSlice,
                        allPosts: posts,
                    }
                }

            })

        }
    },
        commentSlice: {
        allComments:[],
            loadComments: (comments)=> {
            return set (state => {
                return {
                    ...state,
                    commentSlice: {
                        ...state.commentSlice,
                        allComments: comments,
                    }
                }
            })
            }
        }
    }
    });





