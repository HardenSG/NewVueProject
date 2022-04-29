<template>
<div>
    <HeaderSection></HeaderSection>
    <FooterSection></FooterSection>
    <router-view></router-view>
    <h2 @click="add">
      {{$store.state.num}}
    </h2>
</div>
</template>

<script>
 import HeaderSection from '@/components/Header/index.vue'
 import FooterSection from '@/components/Footer/index.vue'
import store from './store';

export default {
  name: 'App',
  components:{
    HeaderSection,
    FooterSection
  },
  setup(){
    function add(){
      store.dispatch('addNum',store.state.num+1)
    }
    return {
      add
    }
  }
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

a {
	text-decoration: none;
	color: #666666;
	font-size: 12px;
}

a:hover {
	color: red;
}

li {
	list-style: none;
}

i, em {
	font-style: normal;
}

@font-face {
  font-family: 'iconfont';  /* Project id 3169833 */
  src: url('//at.alicdn.com/t/font_3169833_enczmkgiomu.woff2?t=1644806970334') format('woff2'),
       url('//at.alicdn.com/t/font_3169833_enczmkgiomu.woff?t=1644806970334') format('woff'),
       url('//at.alicdn.com/t/font_3169833_enczmkgiomu.ttf?t=1644806970334') format('truetype');
}

.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

button,
input {
	border: 0;
	outline: 0;
	font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
}

.current {
	color: #c81623;
}



</style>
