import Home from "../views/Home";
import post from '../views/Post';
import category from "../views/category";
import login from "../views/auth/login";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: "/post/:slug",
        name: "singlepost",
        props:true,
        component: post,
    },
    {
        path: "/category/:slug",
        name: "category",
        props:true,
        component: category,
    },
    {
        path: "/login",
        name: "login",
        component: login,
    },

]
export default routes;
