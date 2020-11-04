<template>
  <div>
    <nav class="navigation row">
      <div class="main-nav row">
        <nuxt-link :to="{name: 'index'}" class="nav-link nav-home">Homie</nuxt-link>
        <nuxt-link :to="{name: 'forSale'}" class="nav-link">Buy & Rents</nuxt-link>
        <nuxt-link :to="{name: 'add-new'}" class="nav-link">Add offer</nuxt-link>
        <div class="login-nav row" v-if="!logged">
          <nuxt-link :to="{name: 'login'}" class="nav-link">Login</nuxt-link>
          <nuxt-link :to="{name: 'register'}" class="nav-link">Register</nuxt-link>
        </div>
        <div class="login-nav" v-else>
          <button class="hollow user-panel-btn" @click="gotoUserPanel(logged)">
            <img :src="logged.logo" alt="" class="logo-user-nav">
          {{logged.user}}</button>
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
  methods: {
    
    gotoUserPanel(logged){

      let user = logged.user
    
      this.$router.push(`/user/${user}`)
    }
  },
}
</script>
