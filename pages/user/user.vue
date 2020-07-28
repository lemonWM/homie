<template>
    <div>
       <div v-for="(user, index) in users">
            <nuxt-link :to="{name: 'user-id', params: {id: user.name, user: user}}">{{user.name}}</nuxt-link>
       </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'user',
    data() {
        return {
            user: 'Jan',
            users: []
        }
    },
    created() {
        axios.get(`https://cantus-app.herokuapp.com/categories`)
        .then(({ data})=> {
            
            this.call(data)
            this.users = data
        })
    },
    methods: {
        call(data){
            console.log(data)
        }
    }
}
</script>