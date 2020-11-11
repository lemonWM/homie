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
        <adresContent v-show="openAddress" />
    </div>

    <div class="module">
        <div class="row">
            <h2>Details</h2>
            <button class="hollow" @click="openDetails =! openDetails">
                <i class="fas fa-chevron-down" v-if="openDetails"></i>
                <i class="fas fa-chevron-up" v-else></i>
            </button>
        </div>
        <detailsContent v-show="openDetails" />
    </div>

    <div class="module photo-module">
        <div class="row">
            <h2>Photos uploader</h2>
            <button class="hollow" @click="openPhotos =! openPhotos">
                <i class="fas fa-chevron-down" v-if="openPhotos"></i>
                <i class="fas fa-chevron-up" v-else></i>
            </button>
        </div>
        <photosContent v-show="openPhotos" />
    </div>

    <div class="show-preview-buttons">
        <button class="hollow discard-change home-btn" @click="discard">Discard</button>
        <button class="hollow accept-change home-btn" @click="createNew" :disabled='!isUser'>Accept</button>
    </div>

    <div class="is-logged-panel " v-if="!logged">
        <div class="preview-details">
            <div>
                <h3>To continue on creator</h3>
                <button class="hollow" @click="logged =!logged">
                    <i class="far fa-times-circle"></i>
                </button>
            </div>
            <div>
                <button class="hollow accept-change home-btn" @click="redirectTo('register')">Register</button>
                <button class="hollow discard-change home-btn" @click="redirectTo('login')">Login</button>
            </div>
        </div>
    </div>

    <div class="is-logged-panel sending-panel" v-if="sendingNew">
        <div class="preview-details">
            <p>Creating in progress</p>
            <progress class="progress" :value="progressValue" max="100"></progress>
            <div v-if="reciveObject">
                <p>show your offer</p>
                <button class="accept-change home-btn" @click="newOfferDetails">
                    <img :src="registered.photos[0]" alt="">
                    {{registered.localization}} {{registered.address}}
                </button>
            </div>
        </div>
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
    props: ['offerType'],
    data() {
        return {
            openAddress: true,
            openDetails: false,
            openPhotos: false,
            logged: true,
            sendingNew: false,
            progressValue: 20,
            reciveObject: false,
            registered: {}
        }
    },
    created() {

        setTimeout(() => {
            this.isLogged()
        }, 3000);
    },
    computed: {

        isUser() {

            return Object.entries(this.$store.state.user).length !== 0
        }
    },
    methods: {
        discard() {
            this.$router.push({
                name: "add-new"
            })
        },
        createNew() {

            this.sendingNew = true

            this.progressValue = 30

            let offer = this.$store.state.newSale

            this.saveNew(offer)
        },
        isLogged() {

            if (Object.entries(this.$store.state.user).length !== 0) {

                this.logged = true

                this.$store.commit('setOfferOwnerNewSale', {
                    _id: this.$store.state.user._id,
                    first_name: this.$store.state.user.first_name,
                    last_name: this.$store.state.user.last_name,
                    email: this.$store.state.user.email,
                    phone: this.$store.state.user.phone,
                    photo: this.$store.state.user.logo,
                })
                this.$store.commit('setSaleTypeNewSale', {
                    type: this.offerType
                })

            } else {
                this.logged = false
            }
        },
        redirectTo(path) {

            this.$router.push({
                name: path
            })
        },
        saveNew(newOffer){

            this.progressValue = 50

            this.$axios.post(`${this.$axios.defaults.baseURL}/new-offer-add`, newOffer)

            .then(({ data }) =>{

                this.progressValue = 100

                this.registered = data

                this.reciveObject = true

                let offer_to_user = {
                    '_id': data._id,
                    'address': data.address,
                    'localization': data.localization,
                    'photo': data.photos[0],
                    'price': data.price,
                    'totalArea': data.totalArea,
                    'type': data.type
                }
                // api to user 
                
            })
            .catch(({ err })=>{
                console.log(err)
            })
        },
        newOfferDetails(){

            let id = this.registered._id

            this.$router.push(`/forSale/${id}`)
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
