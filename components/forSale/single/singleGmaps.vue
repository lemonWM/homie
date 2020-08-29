<template>
    <div>
        <gmap-map
            :center="center"
            :zoom="12"
            style="width:100%;  height: 300px;"
            >
            <gmap-marker
                :key="marker"
                :position="marker"
            ></gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
export default {
    name:'single-details-g_map',
    props: ['marker'],
    computed: {
        center(){

            let centerValue = {
                lat: this.marker.lat,
                lng: this.marker.lng
            }
            return centerValue
        },
    },
}
</script>