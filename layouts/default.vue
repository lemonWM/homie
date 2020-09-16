<template>
  <div>
    <nav class="navigation row">
      <div class="main-nav row">
        <nuxt-link :to="{name: 'index'}" class="nav-link nav-home">HOMIE</nuxt-link>
        <nuxt-link :to="{name: 'forSale'}" class="nav-link">BUY</nuxt-link>
        <nuxt-link :to="{name: 'forRent'}" class="nav-link">RENT</nuxt-link>
        <nuxt-link :to="{name: 'add-new'}" class="nav-link">ADD NEW</nuxt-link>
        <div class="login-nav row" v-if="!logged">
          <nuxt-link :to="{name: 'login'}" class="nav-link">Login</nuxt-link>
          <nuxt-link :to="{name: 'register'}" class="nav-link">Register</nuxt-link>
        </div>
        <div class="login-nav">
          <button>{{logged.user}}</button>
        </div>
      </div>
    </nav>
    <Nuxt class="main-wrapper"/> <!-- main content -->
  </div>
</template>

<script>
export default {
  name: 'nav-main',
  data() {
    return {
      loggedUser: false
    }
  },
  computed: {
    
    logged(){

        if( Object.entries(this.$store.state.user).length === 0){

          return false
        } else {

          return this.$store.state.user
        }
    }

  },
}
</script>
