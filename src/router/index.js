import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import ProductListView from '@/views/ProductListView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products',
      name: 'product-list',
      component: ProductListView
    },
    {
      path: '/product/:id',
      name: 'product-details',
      component: ProductDetailsView,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    }
  ]
})

export default router
