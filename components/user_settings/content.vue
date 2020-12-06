<template>
    <div class="main_settings">
        <pre>{{user}}</pre>
    </div>
</template>

<script>
export default {
    name: 'profile settings',
    data() {
        return {
            user: {}    
        }
    },
    created() {
        
        this.user = this.$store.state.user
    },
}
</script>