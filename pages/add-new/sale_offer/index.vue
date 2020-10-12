<template>
    <div class="main-generator">
        <div class="title">Create own sells offer</div>
        <mainContent offerType='sale'/>
    </div>
</template>

<script>

import mainContent from '../../../components/addOffer/sales_generator/mainContent'

export default {
    name: 'sale-module-generator',
    components: {
        mainContent
    }
}
</script>