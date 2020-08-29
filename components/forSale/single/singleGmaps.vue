<template>
    <div v-if="marker">
        <gmap-map
            :center="marker"
            :zoom="12"
            style="width:100%;  height: 300px;"
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