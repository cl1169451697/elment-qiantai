import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Categroy from '../views/categroy.vue'
import Login from '../views/login.vue'
import List from '../views/product/List.vue'
import View from '../views/product/view.vue'
import Carlist from '../views/shopping/cartlist.vue'// 购物车列表
import Cart from '../views/shopping/cart.vue'// 购物车空
import User from '../views/user/user.vue'// 登录
import Regis from '../views/regis.vue'// 注册
import Sett from '../views/Sett/sett.vue' // 结算
import Address from '../views/Address/address.vue'// 新增地址
import Newaddress from '../views/Address/new_address.vue' // 新增地址页面
Vue.use(VueRouter)

const routes = [
  { 
    path: '/', // =主页
    name:'home',
    component: Home,
    // redirect: '/welcome',// 路由重定向,进入home就显示到welcome页面
   },
  { 
    path: '/categroy', // 分页
    name:'categroy',
    component: Categroy,
   },
   { 
    path: '/list/:id', // 分页列表
    name:'list',
    component: List,
   },
   { 
    path: '/view/:id', // 商品介绍页
    name:'view',
    component: View,
   },
   { 
    path: '/shopping/cartlist', // 购物车
    name:'cartlist',
    component: Carlist,
   },
   { 
    path: '/shopping/cart', // 空购物车
    name:'cart',
    component: Cart,
   },
   {
    path: '/shopping/address', //填写地址
    name:'address',
    component:Address
   },
   {
    path:'/newaddress', // 新增地址页面
    name:'newaddress',
    component:Newaddress
   },
   {
    path: '/shopping/sett',
    name:'sett',
    component:Sett
  },
   { 
    path: '/login', // 登录
    name:'login',
    component: Login,
   },
   {
     path: '/regis', // 注册
     name:'regis',
     component: Regis
   },
   { 
    path: '/user', // 服务
    name:'user',
    component: User,
   }
   
]

const router = new VueRouter({
  mode: 'history',
  routes
})
  
export default router
