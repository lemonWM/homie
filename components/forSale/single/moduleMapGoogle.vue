<template>
    <div class="g-maps">
        <gmap-map
            :center="center"
            :zoom="11"
            style="width:100%;  height: 300px;"
            >
            <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                @click="show(m.position)"
            ></gmap-marker>
        </gmap-map>

        <div class="prev-sing-g-maps" v-if="visible">
            <article>
                <div class="preview-details">
                    <p>{{preview.address}}</p>
                    <p>{{preview.localization}}</p>
                    <p>{{preview.price}}</p>            
                </div>
                <figure>
                    <img :src="preview.photos[0]" alt="" class="img-preview-icon">
                </figure>
                <button @click="visible =!visible">
                    <i class="fas fa-times"></i>
                </button>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoogleMap",
    data() {
        return {
            visible: false,
            preview: {},
            error: null
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
        } // creating markers from all sels element in base
    },
    methods: {
      
        show(value){
          
            this.$axios.get(`http://localhost:5000/single-sale/${value.id}`)
                .then(({data})=>{
                    
                    this.preview = data

                    this.visible = true
                })
                .catch(({ error })=> {

                    this.error = error
                })
        } // get single sels for preview on g-maps
    },
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
    height: 260px;
    border-radius: 20px;
    padding: 15px;
}
.visible{
    display: block;
}
.img-preview-icon{
    width: 100px;
}


</style>