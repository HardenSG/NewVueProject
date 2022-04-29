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
            query:{redirect:to.fullPath}
        })
            
    }else{
        next()
    }
})

let orginpush = router.push

// 重写push方法,其实重写的目的就是为了更方面的去处理事情,避免代码冗余难看,所以重写和封装都是要注意要从源头去控制
router.push = function(location,resolve,reject){
    if (resolve && reject) {
        orginpush.call(this,location,resolve,reject)
    }else{
        orginpush.call(this,location,()=>{},()=>{})
    }
}
export default router















