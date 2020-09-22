<template>
    <div class="rent-create-element">
        <div class="dimmed"></div>
        <div class="content">
            <h3 class="offer-create-title">rent offer</h3>
            <button :disabled='!logged' class="button hollow">CREATE</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'rent-generator',
    computed: {
        logged(){

            if( Object.entries(this.$store.state.user).length === 0){

                return false
            } else {

                return true
            }
        }
    },
}
</script>