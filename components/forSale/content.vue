<template>
    <div class="sales-wrapper">
        <div class="row" v-for="(single, index) in sales">
            <p>{{single}}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'main-content',
    data() {
        return {
            
        }
    },

    computed: {
        
        sales(){

            return this.$store.state.sales
        }
    },
}
</script>