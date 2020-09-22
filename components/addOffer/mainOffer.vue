<template>
    <div class="offer-wrapper">
        <h2>Create new offert on <span>Homie</span></h2>
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
    computed: {
        logged(){

            if( Object.entries(this.$store.state.user).length === 0){

                return false
            } else {

                return true
            }
        }
    },
    components: {
        rentGenerator,
        saleGenerator
    }
}
</script>