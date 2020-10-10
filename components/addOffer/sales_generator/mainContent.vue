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
        <button class="hollow accept-change home-btn" @click="createNew">Accept</button>
    </div>

    <div class="is-logged-panel preview-details" v-if="logged">
        <div>
            <h3>To continue on creator</h3>
        </div>
        <div>
            <button class="hollow accept-change home-btn" @click="redirectTo('register')">Register</button>
            <button class="hollow discard-change home-btn" @click="redirectTo('login')">Login</button>
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
    data() {
        return {
            openAddress: true,
            openDetails: false,
            openPhotos: false,
            logged: true
        }
    },
    created() {

        setTimeout(() => {
            this.isLogged()
        }, 3000);
    },
    computed: {

        newOffer() {

            return this.$store.state.newSale
        }
    },
    methods: {
        discard() {
            this.$router.push({
                name: "add-new"
            })
        },
        createNew() {

            console.log(this.newOffer) //update send to base - new offer
        },
        isLogged() {

            if (Object.entries(this.$store.state.user).length !== 0) {
                console.log(this.$store.state.user.first_name)

                this.logged = true
            } else {
                this.logged = false
            }
        },
        redirectTo(path) {

            this.$router.push({
                name: path
            })
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
