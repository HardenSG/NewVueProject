import { createApp } from 'vue'
import App from './App.vue'
// 引入路由，在下面use一下
import router from '@/router/index'

createApp(App).use(router).mount('#app')
