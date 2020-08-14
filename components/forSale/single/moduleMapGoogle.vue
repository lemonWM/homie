<template>
    <div>
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
    </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
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
      }
  }
};
</script>