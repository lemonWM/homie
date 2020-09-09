<template>
    <div v-if="marker">
        <gmap-map
            :center="marker"
            :zoom="12"
            class="g_map"
            >
            <gmap-marker
                :key="marker._id"
                :position="marker"
            ></gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
export default {
    name:'single-details-g_map',
    props: ['marker']
}
</script>

<style>
.g_map{
    width: 300px;
    height: 700px;
}
.vue-map{
    overflow: hidden;
border-radius: 20px;
}
</style>