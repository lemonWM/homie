<template>
    <div class="rent-create-element">
        <div class="dimmed"></div>
        <div class="content">
            <h3 class="offer-create-title">rent offer</h3>
            <button class="button-generate" @click="generate">CREATE</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'rent-generator',
    methods: {
        generate(){
            this.$router.push({name: 'add-new-rent_offer'})
        }
    },
}
</script>