<template>
  <h1>
      我是首页
  </h1>
</template>

<script>
import router from '@/router'
export default {
    name:'HomeIndexSection',
    beforeRouteEnter(to,from,next){
      if (to.meta.auth) {
        alert("你需要鉴权！")
        router.push({path:'/login',query:{redict:to.fullPath}})
      }
    }
}
</script>

<style>

</style>