<template>
    <div class="sale-wrapper">
        <headerMain />

        <div class="dd">
            <p>dd</p>
        </div>
    </div>
</template>

<script>

import headerMain from '../components/forSale/header'

export default {
    name: 'for-sale',
    components: {
        headerMain
    }
}
</script>

<style scoped>

.sale-wrapper{
    background-color: #3b4350; 
}
.dd{
    height: 500px;
}
</style>