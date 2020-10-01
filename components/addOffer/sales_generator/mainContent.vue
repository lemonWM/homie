<template>
    <div class="item-new">
        <div class="module">
            <div class="row">
                <h2>Location</h2>
                <button class="hollow" @click="openAddress =! openAddress">
                    <i class="fas fa-chevron-down" v-if="openAddress"></i>
                    <i class="fas fa-chevron-up" v-else></i>
                </button>
            </div>
            <adresContent v-show="openAddress"/>
        </div>

        <div class="module">
            <div class="row">
                <h2>Details</h2>
                <button class="hollow" @click="openDetails =! openDetails">
                    <i class="fas fa-chevron-down" v-if="openDetails"></i>
                    <i class="fas fa-chevron-up" v-else></i>
                </button>
            </div>
            <detailsContent v-show="openDetails"/>
        </div>

        <div class="module photo-module">
            <div class="row">
                <h2>Photos uploader</h2>
                <button class="hollow" @click="openPhotos =! openPhotos">
                    <i class="fas fa-chevron-down" v-if="openPhotos"></i>
                    <i class="fas fa-chevron-up" v-else></i>
                </button>
            </div>
            <photosContent v-show="openPhotos"/>
        </div>

        <div class="show-preview-buttons">
            <button class="hollow discard-change home-btn" @click="discard">Discard</button>
            <button class="hollow accept-change home-btn" @click="createNew">Accept</button>
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
            openAddress: true,
            openDetails: false,
            openPhotos: false
        }
    },
    computed: {
        newOffer(){

            return this.$store.state.newSale
        }
    },
    methods: {
        discard(){
            this.$router.push({name: "add-new"})
        },
        createNew(){

            console.log(this.newOffer)
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