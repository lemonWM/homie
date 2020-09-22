<template>
    <div class="offer-wrapper">
        <h2 class="main-title">Create new offert on <span>Homie</span></h2>
        <div class="offer-generator">
            <saleGenerator />
            <rentGenerator />
        </div>
    </div>
</template>

<script>

import saleGenerator from './saleOfferGenerator'
import rentGenerator from './rentOfferGenerator'

export default {
    name: 'create-new-offer',
    components: {
        rentGenerator,
        saleGenerator
    }
}
</script>