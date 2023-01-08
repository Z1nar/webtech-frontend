import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProductView from "@/views/AddProductView";
import ProductsView from "@/views/ProductsView";
import AboutView from "@/views/AboutView";
import ProductDetail from "@/views/ProductDetail";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component:AboutView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/add-product',
    name: 'add-product',
    component: AddProductView
  },
  {
    path: '/demo',
    name: 'demo-view',
    component: () => import(/* webpackChunkName: "demo" */ '../views/Demo.vue')
  },
    {
        path: '/products/:id',
        name: 'product-detail',
        component: ProductDetail
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
