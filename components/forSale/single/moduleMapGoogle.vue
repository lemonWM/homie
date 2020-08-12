<template>
    <div>
        <gmap-map
            :center="center"
            :zoom="4"
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

      center: { 
            lat: 34.052235,
            lng: -118.243683,
        },
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

  mounted() {
    //this.geolocate();
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
        geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
                };
            });
        },
        show(value){

            console.log(value.name)
        }
    }
};
</script>