<template>
  <h1>
      我是登录
  </h1>
  <button @click="Login">
    登录
  </button>
</template>

<script>
import router from '@/router'
import {ref} from 'vue'
export default {
    name:'LoginIndexSection',
    setup(){
      let fullPath = ref(String())
      function Login(){
        alert("你登陆了！")
        console.log(router.push({path:fullPath.value}));
      }
      return{
        fullPath,
        Login
      }
    },
    beforeRouteEnter(to,from,next){
      next((vc)=>{
        vc.fullPath = to.query.redirect
      })
    }
}
</script>

<style>

</style>