<template>
    <div>
        <div class="nav_user_panel">
            <section>
               <button @click="showChildDetails('dashboard')">Dashboard</button>
               <button @click="showChildDetails('offers')">Offers</button>
               <button @click="showChildDetails('observe')">Observe</button>
               <button @click="showChildDetails('contact')">Contact</button>
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
    computed: {
        
        getUser(){

            return this.user.user
        }
    },
    methods: {
        
        showChildDetails(value){

            this.$router.push(`/user/${this.getUser}/${value}`)
        }
    },
}
</script>