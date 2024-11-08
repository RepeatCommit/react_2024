import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import CommentsWithPostsPage from "../pages/CommentsWithPostsPage";

 const routes = [{
          path: '/', element: <MainLayout/>, children: [
         {path: 'users', element: <UsersPage/>},
         {path: 'posts', element: <PostsPage/>},
         {path: 'comments', element: <CommentsPage/>},
         {path: 'commentPosts', element: <CommentsWithPostsPage/>},
     ]
 }]


 export const router = createBrowserRouter(routes);