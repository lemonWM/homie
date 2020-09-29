<template>
    <div class="item-new">
        <div>
            <label for="">Select address</label>
            <vue-google-autocomplete
                id="map"
                ref="addresName"
                classname="input-sels"
                placeholder="Enter city, ex. 'Los Angeles'"
                v-on:placechanged="getToData"
                types="(cities)"
                country="" 
            />
        </div>
        <div>
            <label for="street">Street name</label>
            <input type="text" id="street" placeholder="Write name of street" class="input-sels">
        </div>
        <div>
            <label for="streetNumber">Numer on street</label>
            <input type="text" id="street" placeholder="Write numer on street" class="input-sels">
        </div>
        <div>
            <label for="zipcode">Type zipcode</label>
            <input type="number" id="zipcode" placeholder="Write zipcode" class="input-sels">
        </div>
    </div>
</template>

<script>

import VueGoogleAutocomplete from '../../../node_modules/vue-google-autocomplete'

export default {
    name: 'new-sale-generator',
    data() {
        return {
            addresName:''
        }
    },
    mounted() {

        this.$refs.addresName.focus();
    },
    methods: {
               /**
        * When the location found
        * @param {Object} addressData Data of the found location
        * @param {Object} placeResultData PlaceResult object
        * @param {String} id Input container ID
        */
        getToData: function (addressData, placeResultData, id) {

            console.log(addressData)
            
        },
    },
    watch: {
        addresName(newLocalization){
            console.log(newLocalization)
        }
    },
    components: { VueGoogleAutocomplete }
}
</script>