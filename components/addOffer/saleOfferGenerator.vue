<template>
    <div class="sale-create-element">
        <div class="dimmed"></div>
        <div class="content">
            <h3 class="offer-create-title">sale offer</h3>
            <button :disabled='!logged' class="button hollow">CREATE</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sale-generator',
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

