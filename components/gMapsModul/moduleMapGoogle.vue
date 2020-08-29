<template>
    <div class="g-maps" @click="hideShort">
        <gmap-map
            :center="center"
            :zoom="11"
            style="width:100%;  height: 300px;"
            class="dds"
            >
            <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                @click="show(m.position)"
                :id="dddddddd"
            ></gmap-marker>
        </gmap-map>

        <div class="prev-sing-g-maps" v-if="visible">
            <article>
                <figure>
                    <img :src="preview.photos[0]" alt="" class="img-preview-icon">
                </figure>
                <div class="preview-details">
                    <p>{{preview.address}}</p>
                    <p>{{preview.localization}}</p>
                    <p>{{preview.price}}</p>            
                </div>
                <button class="secondary button hollow" @click="singleDetails">VISIT PLACE</button>
                <button @click="visible =!visible; emitID('')">
                    <i class="fas fa-times"></i>
                </button>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoogleMap",
    props: {
        rotatedPin: {
            type: Object
        },
        isActive: true
    },
    data() {
        return {
            visible: false,
            preview: {},
            error: null,
        }
    },

    computed: {
      
        center(){

            let centerValue = {
                lat: this.$store.state.localization.latitude,
                lng: this.$store.state.localization.longitude
            }
            return centerValue
        },
        markers(){

            let items = this.$store.state.sales

            let markers = []

            items.forEach(function(item){

                let localization = {
                    position: {
                        lat: item.geolocalization.lat,
                        lng: item.geolocalization.lng,
                        id: item.geolocalization.id
                    }
                }
                markers.push(localization)
            })

            return markers
        }, // creating markers from all sels element in base
       
    },
    methods: {
      
        show(value){
          
            this.$axios.get(`http://localhost:5000/single-sale/${value.id}`)
                .then(({data})=>{
                    
                    this.preview = data

                    this.visible = true

                    this.emitID(data._id) // emit for add active class to pin element
                })
                .catch(({ error })=> {

                    this.error = error
                })

        }, // get single sels for preview on g-maps
        hideShort(){

            this.visible = false
        },
        singleDetails(){

            let id = this.preview._id

            this.$router.push(`/forSale/${id}`)
        },
        emitID(id){

            this.$emit('pointered', id)
        }
    }
};
</script>

<style>

.g-maps{
    position: relative;
}
.prev-sing-g-maps{
    position: absolute;
    top: 20px;
    right: 90px;
    background: #505767;
    
    border-radius: 20px;
    padding: 15px;
}
.visible{
    display: block;
}
.img-preview-icon{
    width: 100px;
}
.ddsssss{
    display: none;
}

</style>