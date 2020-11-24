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
          <button class="hollow user-panel-btn" @click="activePanel =! activePanel">
            <img v-if="logged.logo" :src="logged.logo" alt="" class="logo-user-nav">
            <img v-else src="../../homie/static/user-logo.png" class="logo-user-nav">
          </button>

          <div class="login-nav__panel" v-if="!activePanel">
            <ul>
              <li>
                <button @click="gotoUserPanel(logged)"><i class="fa fa-user"></i> {{logged.user}}</button>
              </li>
              <li>
                <button><i class="fa fa-star"></i> observe</button>
              </li>
              <li>
                <button><i class="fas fa-cogs"></i> settings</button>
              </li>
              <li>
                <button><i class="fa fa-power-off"></i> logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    
    <Nuxt class="main-wrapper"/> <!-- main content -->

    <footer>
      <div class="footer">
        <span>homie by art {{date}}</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'nav-main',
  data() {
    return {
      loggedUser: false,
      date: '',
      activePanel: false
    }
  },
  created() {
    
    let date = new Date()

    this.date = date.getFullYear()

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

      this.activePanel =! this.activePanel
    
      this.$router.push(`/user/${user}`)
    }
  },
}
</script>
