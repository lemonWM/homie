<template>
<div class="g-maps" @click="hideShort">
    <gmap-map :center="center" :zoom="9" style="width:100%;  height: 400px;">
        <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" @click="show(m.position)">
        </gmap-marker>
    </gmap-map>

    <div class="prev-sing-g-maps" v-if="visible">
        <article>
            <div class="top">
                <figure>
                    <img :src="preview.photos[0]" alt="" class="img-preview-icon">
                </figure>
                <div class="preview-details">
                    <p>City: {{preview.localization}}</p>
                    <p>Address: {{preview.address}}</p>
                </div>
            </div>
            <div class="bottom">
                <button class="button-generate" @click="singleDetails">VISIT</button>
                <button @click="visible =!visible; emitID('')" class="button-generate">CLOSE</button>
            </div>
        </article>
    </div>
</div>
</template>

<script>
export default {
    name: "GoogleMap",
    props: {
        isActive: true,
    },
    data() {
        return {
            visible: false,
            preview: {},
            error: null
        }
    },
    computed: {

        center() {

            let centerValue = {
                lat: this.$store.state.localization.latitude,
                lng: this.$store.state.localization.longitude
            }
            return centerValue
        },
        markers(value) {

            let items = this.$store.state.sales

            let markers = []

            items.forEach(function (item) {

                let localization = {
                    position: {
                        lat: item.geolocalization.lat,
                        lng: item.geolocalization.lng,
                        id: item.geolocalization.id,
                    }
                }
                markers.push(localization)
            })

            return markers
        }, // creating markers from all sels element in base

    },
    methods: {

        show(value) {

            console.log(value)

            this.$axios.get(this.$axios.defaults.baseURL + `/single-sale/${value.id}`)
                .then(({ data }) => {

                    this.preview = data

                    this.visible = true

                    this.emitID(data._id) // emit for add active class to pin element
                })
                .catch(({ error }) => { this.error = error})

        }, // get single sels for preview on g-maps
        hideShort() {

            this.visible = false;
        },
        singleDetails() {

            let id = this.preview._id

            this.$router.push(`/forSale/${id}`)
        },
        emitID(id) {

            this.$emit('pointered', id)
        }
    }
};
</script>
