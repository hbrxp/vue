import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Follow from '../pages/Follow.vue';
import Column from '../pages/Column.vue';
import User from '../pages/User.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';
import Detail from '../pages/Detail.vue';
import NoPage from '../pages/NoPage.vue';

let routes = [
  {path:'/home',component:Home},
  {path:'/Follow',component:Follow},
  {path:'/Column',component:Column},
  {path:'/Detail/:_id',component:Detail},
  {path:'/User',component:User},
  {path:'/Login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage}
];

let router = new VueRouter({
  routes,
  mode:'history'
})

export default router;