import { createApp } from 'vue'
import App from './App.vue'
// 引入路由，在下面use一下
import router from '@/router/index'

import store from '@/store/index'

createApp(App).use(router).use(store).mount('#app')
