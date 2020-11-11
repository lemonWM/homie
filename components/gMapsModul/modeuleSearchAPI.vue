<template>
    <div class="auto-complete">
        <vue-google-autocomplete
            id="map"
            ref="address"
            classname="input-sels"
            :placeholder="placeholder_text"
            v-on:placechanged="getToData"
            types="(cities)"
            country="us" 
        />
        <button @click="clearSearch">
            <i class="far fa-times-circle"></i>
        </button>
    </div>
</template>

<script>

import VueGoogleAutocomplete from '../../node_modules/vue-google-autocomplete';

export default {
    name: 'search-google-api',
    data() {
        return {
            address: '',
            placeholder_text: "Enter city, ex. 'Los Angeles'"
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
        },
        clearSearch(){
            
            this.$store.commit('searchPlace', {
                searchPlace: ''
            })

            this.$refs['address'].autocompleteText = ""

            console.log(this.$refs['address'])
        } // reset sort place by localization
    },
    watch: {
        address(newLocalization) {

            let namePlace = newLocalization.locality

            this.$store.commit('setLocalization', {
                localization: newLocalization
            })
            this.$store.commit('searchPlace', {
                searchPlace: namePlace
            })
        },
        placeholder_text(n){
            console.log(n)
        }
    },
    components: { VueGoogleAutocomplete }
}
</script>

