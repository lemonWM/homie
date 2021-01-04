<template>
    <div>
        <div class="item-new-offer" v-if="!preview">
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
                <input type="text" id="street" placeholder="Write name of street" class="input-sels" v-model="street">
            </div>
            <div>
                <label for="streetNumber">Numer on street</label>
                <input type="text" id="street" placeholder="Write numer on street" class="input-sels" v-model="streetNumber">
            </div>

            <button class=" hollow home-btn" @click="setInformation" :disabled='$v.$invalid'>Confirm all</button>
        </div> 
        <div v-if="preview">
            <div class="preview-details">
                <p>Localization: <span>{{returnAddress.localization}}</span></p>
                <p>Address: <span>{{returnAddress.address}}</span></p>
                <button class="hollow button-generate" @click="preview =! preview">Edit address</button>
            </div>
        </div>   
    </div>

</template>

<script>

import VueGoogleAutocomplete from '../../../node_modules/vue-google-autocomplete'

import { validationMixin } from 'vuelidate';
import { required,  minLength } from 'vuelidate/lib/validators';

export default {
    name: 'address-content',
    mixins: [validationMixin],
    data() {
        return {
            addresName:'',
            street:'',
            streetNumber: '',
            preview: false
        }
    },
    mounted() {

        this.$refs.addresName.focus();
    },
    computed: {
        
        returnAddress(){

           return this.$store.state.newSale
        }
    },
    methods: {
               /**
        * When the location found
        * @param {Object} addressData Data of the found location
        * @param {Object} placeResultData PlaceResult object
        * @param {String} id Input container ID
        */
        getToData: function (addressData, placeResultData, id) {

            this.addresName = addressData.locality
        },

        setInformation(){

            this.$store.commit('setAddressNewSale',{
                localization: this.addresName,
                address: this.street+' '+this.streetNumber
            })
            this.preview =! this.preview

            this.$emit('changeAddresStatus', true); 
        }
    },
    validations: {
        addresName: {
            required
        },
        street: {
            required
        },
        streetNumber: {
            required
        },

    },
    components: { VueGoogleAutocomplete }
}
</script>