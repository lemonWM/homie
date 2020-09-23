<template>
    <div class="sale-create-element">
        <div class="dimmed"></div>
        <div class="content">
            <h3 class="offer-create-title">sale offer</h3>
            <button class="button-generate" @click="generate">CREATE</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sale-generator',
    methods: {
        generate(){
            this.$router.push({name: 'add-new-sale_offer'})
        }
    },
}
</script>

