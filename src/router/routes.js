import Home from "../views/Home";
import post from '../views/Post';
import category from "../views/category";
import login from "../views/auth/login";
import register from "../views/auth/register";
import main_layout from "../views/layout/main";
import auth_layout from '../views/layout/auth';

const routes = [

    {
        path: '/',
        name: 'main',
        component: main_layout,
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home
            },
            {
                path: "/post/:slug",
                name: "singlepost",
                props: true,
                component: post,
            },
            {
                path: "/category/:slug",
                name: "category",
                props: true,
                component: category,
            },
        ]
    },
    {
        path: "/",
        name: "auth",
        component: auth_layout,
        children: [
            {
                path: "/login",
                name: "login",
                component: login,
                meta: {
                    loginPage: true
                }
            },
            {
                path: '/register',
                name: 'register',
                component: register,
            }
        ]
    },




]
// routes.be
export default routes;
