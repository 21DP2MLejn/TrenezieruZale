import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/Welcome.vue'
import LoginPage from '../views/Login.vue'
import RegisterPage from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPw.vue'
import Prices from '../views/Prices.vue'
import AboutUs from '../views/AboutUs.vue'
import Schedule from '../views/Schedule.vue'

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
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
    },
    {
      path: '/prices',
      name: 'prices',
      component: Prices
    },
    {
      path: '/about-us',
      name: 'aboutus',
      component: AboutUs
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
  ]
})

export default router