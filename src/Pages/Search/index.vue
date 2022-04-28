<template>
  <h1 @click="clickThat">
      我是搜索
  </h1>
</template>

<script>
import router from '@/router'
export default {
    name:'SearchIndexSection',
    setup(){
        function clickThat(){
            router.push('home')
        }
        return{
            clickThat
        }
    }
}
</script>

<style>

</style>