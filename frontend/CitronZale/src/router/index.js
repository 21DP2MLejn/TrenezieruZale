import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/Welcome.vue'
import LoginPage from '../views/Login.vue'
import RegisterPage from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
  ]
})

export default router