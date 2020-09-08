<template>
  <div>
    <nav class="navigation row">
      <div class="main-nav row">
        <nuxt-link :to="{name: 'index'}" class="nav-link nav-home">HOMIE</nuxt-link>
        <nuxt-link :to="{name: 'forSale'}" class="nav-link">BUY</nuxt-link>
        <nuxt-link :to="{name: 'forRent'}" class="nav-link">RENT</nuxt-link>
        <nuxt-link :to="{name: 'add-new'}" class="nav-link">ADD NEW</nuxt-link>
        <div class="login-nav row">
          <nuxt-link :to="{name: 'login'}" class="nav-link">Login</nuxt-link>
          <nuxt-link :to="{name: 'register'}" class="nav-link">Register</nuxt-link>
        </div>
      </div>
    </nav>
    <Nuxt class="main-wrapper"/> <!-- main content -->
  </div>
</template>

<style>

.row{
  margin: 0px;
  
}
.navigation{
  height: 40px;
  background-color: inherit;
  z-index: 9;
  position: fixed;
  top: 0px;
  width: 100%;
  justify-content: center;
  max-width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99999;
  -webkit-box-shadow: 0px 7px 32px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 7px 32px -8px rgba(0,0,0,0.75);
  box-shadow: 0px 7px 32px -8px rgba(0,0,0,0.75);
}
.main-nav{
  justify-content: center;
}
.login-nav{
  position: absolute;
  right: 0px;
}
.nav-link{
  color: white;
}
a{

}
.nav-home{
  color:#af9668 ;
}
.main-wrapper{
  padding-top: 40px;
}
</style>
