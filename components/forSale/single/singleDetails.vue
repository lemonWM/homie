<template>
    <div>

        <imgSlider  :single='single'/>

        <gMaps :marker='single.geolocalization'/>
    </div>
</template>

<script>

import imgSlider from './single_imgSlider'
import gMaps from './singleGmaps'

export default {
    name: 'single-details',
    props: ['single'],

    components: {
        imgSlider,
        gMaps
    }
}
</script>