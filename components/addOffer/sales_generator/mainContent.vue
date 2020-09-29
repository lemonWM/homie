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
            <adresContent v-if="openAddress"/>
        </div>

        <div class="module">
            <div class="row">
                <h2>Details</h2>
                <button class="hollow" @click="openDetails =! openDetails">
                    <i class="fas fa-chevron-down" v-if="openDetails"></i>
                    <i class="fas fa-chevron-up" v-else></i>
                </button>
            </div>
            <detailsContent v-if="openDetails"/>
        </div>

        <div class="module">
            <div class="row">
                <h2>Photos uploader</h2>
                <button class="hollow" @click="openPhotos =! openPhotos">
                    <i class="fas fa-chevron-down" v-if="openPhotos"></i>
                    <i class="fas fa-chevron-up" v-else></i>
                </button>
            </div>
            <photosContent v-if="openPhotos"/>
        </div>
    </div>
</template>

<script>

import VueGoogleAutocomplete from '../../../node_modules/vue-google-autocomplete'
import adresContent from './adresContent'
import detailsContent from './detailsContent'
import photosContent from './photosContent'

export default {
    name: 'new-sale-generator',
    data() {
        return {
            openAddress: false,
            openDetails: false,
            openPhotos: false
        }
    },
    components: { 
        VueGoogleAutocomplete,
        adresContent,
        detailsContent,
        photosContent
    }
}
</script>