import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Shop from '../views/Shop.vue'
import User from '../views/User.vue'
import Product from '../views/Product.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import EditUser from '../views/EditUser.vue'
import BOUsers from '../views/dashboard/Users.vue'
import BOProducts from '../views/dashboard/Products.vue'
import BOOrders from '../views/dashboard/Orders.vue'
import BOCategories from '../views/dashboard/Categories.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import AddAdmin from '../views/dashboard/AddAdmin.vue'
import AddProduct from '../views/dashboard/AddProduct.vue'
import EditProduct from '../views/dashboard/EditProduct.vue'
import auth from "../middleware/auth.js";
import Cart from "../views/Cart.vue";
import Whitelist from "../views/Whitelist.vue";
import VueJwtDecode from "vue-jwt-decode";

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
    beforeEnter(to, from, next) {
      if((!localStorage.getItem('token'))) {
        next({
          name: "Login"
        })
      }
      else {
        next()
      }
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/whitelist',
    name: 'Whitelist',
    component: Whitelist
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
    name: 'EditUser',
    component: EditUser,
    beforeEnter(to, from, next) {
      if((!localStorage.getItem('token'))) {
        next({
          name: "Login"
        })
      }
      else {
        next()
      }
    }
  },
  {
    path: '/backoffice/users',
    name: 'BOUsers',
    component: BOUsers,
    beforeEnter(to, from, next) {
      const token = localStorage.getItem('token');
      if(token) {
        const decodedToken = VueJwtDecode.decode(token); 
        if(decodedToken.isAdmin == true) {
          next()
        } else {
          next({
            name: "Home"
          })
        }
      }
      else {
        next({
          name: "Home"
        })
      }
    }
  },
  {
    path: '/backoffice/orders',
    name: 'BOOrders',
    component: BOOrders,
    beforeEnter(to, from, next) {
      const token = localStorage.getItem('token');
      if(token) {
        const decodedToken = VueJwtDecode.decode(token); 
        if(decodedToken.isAdmin == true) {
          next()
        } else {
          next({
            name: "Home"
          })
        }
      }
      else {
        next({
          name: "Home"
        })
      }
    }
  },
  {
    path: '/backoffice/products',
    name: 'BOProducts',
    component: BOProducts,
    beforeEnter(to, from, next) {
      const token = localStorage.getItem('token');
      if(token) {
        const decodedToken = VueJwtDecode.decode(token); 
        if(decodedToken.isAdmin == true) {
          next()
        } else {
          next({
            name: "Home"
          })
        }
      }
      else {
        next({
          name: "Home"
        })
      }
    }
  },
  {
    path: '/backoffice/categories',
    name: 'BOCategories',
    component: BOCategories,
    beforeEnter(to, from, next) {
      const token = localStorage.getItem('token');
      if(token) {
        const decodedToken = VueJwtDecode.decode(token); 
        if(decodedToken.isAdmin == true) {
          next()
        } else {
          next({
            name: "Home"
          })
        }
      }
      else {
        next({
          name: "Home"
        })
      }
    }
  },
  {
    path: '/backoffice',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter(to, from, next) {
      const token = localStorage.getItem('token');
      if(token) {
        const decodedToken = VueJwtDecode.decode(token); 
        // console.log(decodedToken);
        if(decodedToken.isAdmin == true) {
          next()
        } else {
          next({
            name: "Home"
          })
        }
      }
      else {
        next({
          name: "Home"
        })
      }
    }
  },
  {
    path: '/backoffice/add/admin',
    name: 'AddAdmin',
    component: AddAdmin,
    beforeEnter(to, from, next) {
      const token = localStorage.getItem('token');
      if(token) {
        const decodedToken = VueJwtDecode.decode(token); 
        if(decodedToken.isAdmin == true) {
          next()
        } else {
          next({
            name: "Home"
          })
        }
      }
      else {
        next({
          name: "Home"
        })
      }
    }
  },
  {
    path: '/backoffice/add/product',
    name: 'AddProduct',
    component: AddProduct,
    beforeEnter(to, from, next) {
      const token = localStorage.getItem('token');
      if(token) {
        const decodedToken = VueJwtDecode.decode(token); 
        if(decodedToken.isAdmin == true) {
          next()
        } else {
          next({
            name: "Home"
          })
        }
      }
      else {
        next({
          name: "Home"
        })
      }
    }
  },
  {
    path: '/backoffice/edit_product/:id',
    name: 'EditProduct',
    component: EditProduct,
    beforeEnter(to, from, next) {
      const token = localStorage.getItem('token');
      if(token) {
        const decodedToken = VueJwtDecode.decode(token); 
        if(decodedToken.isAdmin == true) {
          next()
        } else {
          next({
            name: "Home"
          })
        }
      }
      else {
        next({
          name: "Home"
        })
      }
    }
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
