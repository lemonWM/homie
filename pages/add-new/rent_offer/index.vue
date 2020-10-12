<template>
    <div class="main-generator">
        <div class="title">Create own rents offer</div>
        <mainContent offerType='rent'/>
    </div>
</template>

<script>

import mainContent from '../../../components/addOffer/sales_generator/mainContent'

export default {
    name: 'rent-module-generator',
    components: {
        mainContent
    }
}
</script>