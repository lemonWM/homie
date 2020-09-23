<template>
<div>
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
    created() {
        this.$axios.get(`${this.$axios.defaults.baseURL}/run`)
        // test api for runing free heroku server
    },
    components: {
        homeHeader
    }
}
</script>

<style>
h1,
h2,
h3,
p,
span,
a,
button {
    font-family: 'Abel', sans-serif;
}
</style>
