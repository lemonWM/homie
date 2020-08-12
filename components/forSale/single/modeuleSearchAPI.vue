<template>
    <div>
        <vue-google-autocomplete
            id="map"
            ref="address"
            classname="input-sels"
            placeholder="Enter city, ex. 'Los Angeles'"
            v-on:placechanged="getToData"
            types="(cities)"
            country="us" />
    </div>
</template>

<script>

import VueGoogleAutocomplete from '../../../node_modules/vue-google-autocomplete';

export default {
    name: 'search-google-api',
    data() {
        return {
            address: ''
        }
    },
    mounted() {

        this.$refs.address.focus();
    },

    methods: {
        /**
        * When the location found
        * @param {Object} addressData Data of the found location
        * @param {Object} placeResultData PlaceResult object
        * @param {String} id Input container ID
        */
        getToData: function (addressData, placeResultData, id) {
            this.address = addressData;
        }
    },
    watch: {
        address(newLocalization) {
            console.log(newLocalization.locality)
            
            this.$store.commit('setLocalization', {
                localization: newLocalization.locality
            })
        }
    },
    components: { VueGoogleAutocomplete }
}
</script>

<style>

.input-sels{
    background-color: #505767;
    border: none;
    box-shadow: none;
    border-radius: 15px;
    padding: 10px 30px;
    color: #bcced3;
    height: auto;
    width: 340px;
    font-size: 22px;
}
</style>
