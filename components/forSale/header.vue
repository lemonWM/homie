<template>
    <div class="main-content sale">
        <div class="header"></div>
        <div class="header-content">
            <h1 class="title">Search for best location</h1>
            <div class="input-search-wrapper">
                <div class="module-search">
                    <searchCity/>
                </div>
            </div>
        </div>
        <div class="dimmed"></div>
    </div>
</template>

<script>

import searchCity from '../gMapsModul/modeuleSearchAPI'


export default {
    name: 'header-single',
    components: {searchCity}
}
</script>


<style scoped>
.sale{
    min-height: 360px;
}
.header{
    background-image: url('../../static/place1.jpg');
    width: 100%;
    max-height: 400px;
    background-position: center;
}

</style>