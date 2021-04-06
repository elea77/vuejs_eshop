import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Shop from '../views/Shop.vue'
import User from '../views/User.vue'
import Product from '../views/Product.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import EditProfile from '../views/EditProfile.vue'
import EditPassword from '../views/EditPassword.vue'
import BOUsers from '../views/dashboard/Users.vue'
import BOProducts from '../views/dashboard/Products.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import AddAdmin from '../views/dashboard/AddAdmin.vue'
import AddProduct from '../views/dashboard/AddProduct.vue'
import EditProduct from '../views/dashboard/EditProduct.vue'
import EditUser from '../views/dashboard/EditUser.vue'
import auth from "../middleware/auth.js";
import Cart from "../views/Cart.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/account',
    name: 'User',
    component: User,
    // beforeEnter(to, from, next) {
    //   if((!localStorage.getItem('token'))) {
    //     next();
    //   }
    //   else {
    //     next({
    //       name: "Login"
    //     })
    //   }
    // }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/edit_profile',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/edit_password',
    name: 'EditPassword',
    component: EditPassword
  },
  {
    path: '/backoffice/users',
    name: 'BOUsers',
    component: BOUsers
  },
  {
    path: '/backoffice/products',
    name: 'BOProducts',
    component: BOProducts
  },
  {
    path: '/backoffice',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/backoffice/add/admin',
    name: 'AddAdmin',
    component: AddAdmin
  },
  {
    path: '/backoffice/add/product',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/backoffice/edit_product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/backoffice/edit_user/:id',
    name: 'EditUser',
    component: EditUser
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
