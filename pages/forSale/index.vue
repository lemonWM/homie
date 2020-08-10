<template>
    <div class="sale-wrapper">
        <headerMain />
        <mainContent/>
    </div>
</template>

<script>

import headerMain from '../../components/forSale/header'
import mainContent from '../../components/forSale/content'

export default {
    name: 'for-sale',
    components: {
        headerMain,
        mainContent
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