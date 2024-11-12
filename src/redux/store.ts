import {IUser} from "../models/IUser";
import {configureStore, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {commentService, postService, userService} from "../services/api.services";
import {AxiosError} from "axios";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import {useDispatch, useSelector} from "react-redux";




type UserSliceType = {
    users: IUser[]
}

const initialState: UserSliceType = {
    users: []
}
const loadUsers = createAsyncThunk(
    "usersSlice/loadUsers",
   async (_,thunkAPI)=>{

       try{
           const users = await userService.getAll();
           return users;

       } catch (e) {
        const error = e as AxiosError;
        return thunkAPI.rejectWithValue(error.response?.data);

       }


    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState:initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload;
        })
            .addCase(loadUsers.rejected, (state, action:PayloadAction<any>) => {

            })

});
export const userActions = {
    ...userSlice.actions,
    loadUsers
}

/*=======================================================*/

type PostSliceType = {
    posts: IPost[];
}
const postsInitState: PostSliceType = {
    posts: []

}

const loadPosts = createAsyncThunk(
    "postSlice/loadPosts",
    async (_,thunkAPI) => {
        try {
            const posts = await postService.getAll();
            return posts;
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState: postsInitState,
    reducers: {},
    extraReducers: builder =>
    builder
        .addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        })
        .addCase(loadPosts.rejected, (state, action:PayloadAction<any>) => {

        })

});
export const postActions = {
    ...postSlice.actions,
    loadPosts
}

/*=======================================================*/

type CommentSliceType = {
    comments: IComment[];
}
const commentsInitState: CommentSliceType = {
    comments: []
}

const loadComments = createAsyncThunk(
    "commentSlice/loadComments",
    async (_,thunkAPI) => {
        try {
            const comments = await commentService.getAll();
            return comments;
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
    )
const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: commentsInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>) => {
                state.comments = action.payload;
            })
            .addCase(loadComments.rejected, (state, action:PayloadAction<any>) => {

            })

});
export const commentActions = {
    ...commentSlice.actions,
    loadComments
}

/*=======================================================*/

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice: commentSlice.reducer
    }
});

export  const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export  const useAppSelector =  useSelector.withTypes<ReturnType<typeof store.getState>>();




