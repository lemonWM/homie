<template>
    <div class="sale-wrapper">
        <headMain/>
        <mainContent/>
    </div>
</template>

<script>

import headMain from '../../components/forSale/header'
import mainContent from '../../components/forSale/content'

export default {
    name: 'for-sale',
    components: {
        headMain,
        mainContent
    }
}
</script>

<style scoped>

.sale-wrapper{
    background-color: #3b4350; 
    min-height: 100vh;
}
.dd{
    height: 500px;
}
</style>