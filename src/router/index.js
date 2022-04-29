// 按需引入，createRouter和createWebHashHistory
import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/home',
        component:() => import('@/Pages/Home'),
        meta:{auth:true}
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
        path: '/search', 
        component: () => import('@/Pages/Search')
    },
    {
        path: '/',
        // 重定向
        redirect:'/search'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,         // 简写routes：routes
  })
// router是createRouter创造出来的实例对象，到main里面use的也是router，实际上就是一个插件

router.beforeEach((to,from,next)=>{
    if (to.meta.auth) {
        alert("你需要鉴权！")
        router.push({
            path:'/login',
            query:{redirect:from.fullPath}
        })
            
    }else{
        next()
    }
})


export default router















