import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/home',
        component:() => import('@/Pages/Home')
    },
    {
        path:'/login',
        component:() => import('@/Pages/Login')
    },
    {
        path:'/register',
        component:() => import('@/Pages/Register')
    },
    {
        path: '/', 
        redirect: to => to.path = '/search'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  
export default router















