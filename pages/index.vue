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
  },
  created() {
    this.getSales()
  },
  methods: {
    
    getSales(){

      this.$axios.get('http://localhost:5000/sales')
      .then(({data})=>{
        
        this.setSales(data)
      })
      .catch(({error})=>{
        this.error = error
      })
    },
    setSales(data){

      this.$store.commit('setSales', {
        sales: data
      })
    }
  },
}
</script>


<style>
h1,h2,h3,p,span,a,button{
  font-family: 'Abel', sans-serif;
}
</style>