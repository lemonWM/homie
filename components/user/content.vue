<template>
    <div class="main-user">
        <div>
            <section class="nav_user_panel" v-if="!mobile">
               <button @click="showChildDetails('dashboard')" :class="{active_nav: toggle_class == 'dashboard'}"><i class="fas fa-columns"></i> Dashboard</button>
               <button @click="showChildDetails('offers')" :class="{active_nav: toggle_class == 'offers'}"><i class="fas fa-map-pin"></i> Offers</button>
               <button @click="showChildDetails('observe')" :class="{active_nav: toggle_class == 'observe'}"><i class="fas fa-bookmark"></i> Observe</button>
               <button @click="mobile =!mobile"><i class="fas fa-arrow-left"></i></button> 
            </section>
            <section class="nav_user_panel icon_panel" v-else >
               <button @click="showChildDetails('dashboard')" :class="{active_nav: toggle_class == 'dashboard'}"><i class="fas fa-columns"></i></button>
               <button @click="showChildDetails('offers')" :class="{active_nav: toggle_class == 'offers'}"><i class="fas fa-map-pin"></i></button>
               <button @click="showChildDetails('observe')" :class="{active_nav: toggle_class == 'observe'}"><i class="fas fa-bookmark"></i></button>
               <button @click="mobile =!mobile"><i class="fas fa-arrow-right"></i></button>                
            </section>
        </div>
        <div class="content">
            <nuxt-child :user='user'></nuxt-child>
        </div>  
    </div>
</template>

<script>
export default {
    name: 'user-details',
    props: ['user'],
    data() {
        return {
            mobile: false,
            toggle_class: ''
        }
    },
    created() {

        this.$router.push(this.$route.path + '/dashboard')
    },
    computed: {
        
        getUser(){

            return this.user.user
        }
    },
    methods: {
        
        showChildDetails(value){

            this.toggle_class = value

            this.$router.push(`/user/${this.getUser}/${value}`)
        }
    },
}
</script>

<style>

.active_nav{
    color: #af9668 !important;
}
</style>