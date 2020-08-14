<template>
    <div>
        <gmap-map
            :center="center"
            :zoom="9"
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
      markers: [{
        position: {
        lat: 34.052235,
        lng: -118.243683,
        name: 'dsdsd'
        },
    }
    ],
      places: [],
      currentPlace: { 
        lat: 34.052235,
        lng: -118.243683, }
    };
  },

  computed: {
      
      center(){

            let centerValue = {
                lat: this.$store.state.localization.latitude,
                lng: this.$store.state.localization.longitude
            }
            return centerValue
      }
  },

  methods: {
    // receives a place object via the autocomplete component
 
//     addMarker() {
//       if (this.currentPlace) {
//         const marker = {
//           lat: this.currentPlace.geometry.location.lat(),
//           lng: this.currentPlace.geometry.location.lng()
//         };
//         this.markers.push({ position: marker });
//         this.places.push(this.currentPlace);
//         this.center = marker;
//         this.currentPlace = null;
//       }
//     },
    }
};
</script>