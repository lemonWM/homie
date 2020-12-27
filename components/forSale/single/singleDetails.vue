<template>
    <div class="single-wrapper__details">
        <div>
            <imgSlider  :single='single'/>
            <textDetails :single='single'/>
            <contact :single='single'/> <!--edit base - add author , email contact-->
        </div>
        <div>
            <gMaps :marker='single.geolocalization'/>
        </div>
    </div>
</template>

<script>

import imgSlider from './single_imgSlider'
import textDetails from './singleDescribe'
import gMaps from './singleGmaps'
import contact from './singleContact'

export default {
    name: 'single-details',
    props: ['single'],

    components: {
        imgSlider,
        textDetails,
        gMaps,
        contact
    }
}
</script>