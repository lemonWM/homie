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

          <div class="login-nav__panel" v-if="activePanel">
            <ul>
              <li>
                <button @click="gotoUserPanel(logged)"><i class="fa fa-user"></i> {{logged.user}}</button>
              </li>
              <li>
                <button @click="gotoSettings"><i class="fas fa-cogs"></i>settings</button>
              </li>
              <li>
                <button @click="logout"><i class="fa fa-power-off"></i> logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mobile-menu burger-menu">
        <div class="top-panel">
          <nuxt-link :to="{name: 'index'}" class="nav-link nav-home">Homie</nuxt-link>
          <button class="burger-btn" @click="toggle_menu">
            <i class="fas fa-ellipsis-h" v-if="!open_menu"></i>
            <i class="fas fa-ellipsis-v" v-else></i>
          </button>
        </div>
        <div class="bottom-panel" v-if="open_menu">
          <nuxt-link :to="{name: 'forSale'}" class="nav-link" @click.native="open_menu =! open_menu">Buy & Rents</nuxt-link>
          <nuxt-link :to="{name: 'add-new'}" class="nav-link" @click.native="open_menu =! open_menu">Add offer</nuxt-link>
          <div class="login-nav row" v-if="!logged">
            <nuxt-link :to="{name: 'login'}" class="nav-link" @click.native="open_menu =! open_menu">Login</nuxt-link>
            <nuxt-link :to="{name: 'register'}" class="nav-link" @click.native="open_menu =! open_menu">Register</nuxt-link>
          </div>
          <div class="login-nav" v-else>
            <button class="hollow user-panel-btn" @click="activePanel =! activePanel">
              <img v-if="logged.logo" :src="logged.logo" alt="" class="logo-user-nav">
              <img v-else src="../../homie/static/user-logo.png" class="logo-user-nav">
            </button>

            <div class="login-nav__panel" v-if="activePanel">
              <ul>
                <li>
                  <button @click="{gotoUserPanel(logged), toggle_menu()}"><i class="fa fa-user"></i> {{logged.user}}</button>
                </li>
                <li>
                  <button @click="{gotoSettings(), toggle_menu()}"><i class="fas fa-cogs"></i>settings</button>
                </li>
                <li>
                  <button @click="{logout(), toggle_menu()}"><i class="fa fa-power-off"></i> logout</button>
                </li>
              </ul>
            </div>
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
      activePanel: false,
      open_menu: false
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
    
    gotoUserPanel(logged, path){

      let user = logged.user

      this.activePanel =! this.activePanel

      this.$router.push(`/user/${user}`)
      
    },
    gotoSettings(){

      this.activePanel =! this.activePanel

      this.$router.push({name: 'settings'})
    },
    logout(){

      this.setLogged()

      this.activePanel =! this.activePanel
    },
    setLogged() {

      let route = $nuxt.$route.path
      let reg = /user/ig
      let reg2 = /settings/ig

      this.$store.commit('loginUser', {
        user: {}
      })

      if(route.match(reg) || route.match(reg2)){
          
          this.$router.push({name: 'login'})
      }
    },
    toggle_menu(){

        this.open_menu =! this.open_menu

    }
  }
}
</script>
