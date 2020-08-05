<template>
  <div>
    <nav class="navigation row">
      <div class="main-nav  row">
        <nuxt-link :to="{name: 'index'}" class="nav-link nav-home">HOMIE</nuxt-link>
        <nuxt-link :to="{name: 'forsale'}" class="nav-link">BUY</nuxt-link>
        <nuxt-link :to="{name: 'forRent'}" class="nav-link">RENT</nuxt-link>
        <div class="login-nav ">
          <nuxt-link :to="{name: 'login'}" class="nav-link">Login</nuxt-link>
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
  position: absolute;
  top: 0px;
  width: 100%;
  justify-content: center;
  max-width: 100%;
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
