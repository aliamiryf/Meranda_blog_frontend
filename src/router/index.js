import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes";
import store from '../store';
Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.loginPage != undefined){
    if (store.getters.getToken == ""){
     next()
      return;
    }
    else {
      next('/dashbord')
      return;
    }
  }
  else {
    next();
  }
})
export default router
