<template>
    <div class="item-new">
        <div class="module">
            <div class="row">
                <h2>Address information</h2>
                <button class="hollow" @click="openAddress =! openAddress">
                    <i class="fas fa-chevron-down" v-if="openAddress"></i>
                    <i class="fas fa-chevron-up" v-else></i>
                </button>
            </div>
            <addressContent v-if="openAddress"/>
        </div>

        <div class="module">
            <div class="row">
                <h2>Details</h2>
                <button class="hollow" @click="openDetails =! openDetails">
                    <i class="fas fa-chevron-down" v-if="openDetails"></i>
                    <i class="fas fa-chevron-up" v-else></i>
                </button>
            </div>
            <detailsContent />
        </div>

    </div>
</template>

<script>

import VueGoogleAutocomplete from '../../../node_modules/vue-google-autocomplete'
import addressContent from './addressContent'
import detailsContent from './detailsContent'

export default {
    name: 'new-sale-generator',
    data() {
        return {
            openAddress: true,
            openDetails: true
        }
    },
    components: { 
        VueGoogleAutocomplete,
        addressContent,
        detailsContent
     }
}
</script>