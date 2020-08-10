<template>
  <div class="home-main">
    <homeHeader />
  </div>
</template>

<script>

import homeHeader from '../components/home/header'

export default {
  name: 'home',
  data() {
    return {
      error: false
    }
  },
  components:{
    homeHeader
  }
}
</script>


<style>
h1,h2,h3,p,span,a,button{
  font-family: 'Abel', sans-serif;
}
</style>