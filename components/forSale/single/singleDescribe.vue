<template>
    <div v-if="single">
        <div class="details-wrapper">
            <div class="details-element">
                <div class="head-line">
                    <h2 class="title" @click="showElement(1)">Overview</h2>
                    <h2 class="title" @click="showElement(2)">Features</h2>
                    <h2 class="title" @click="showElement(3)">House value</h2>
                    <h2 class="title" @click="showElement(4)">Address</h2>
                </div>
                <div class="text-main">
                    <div class="text-wrapper" v-if="show == 1">
                        <p>{{single.description}}</p>
                    </div>
                    <div class="text-wrapper" v-if="single.schedulePlace && show == 2">
                        <p>bedrooms {{single.schedulePlace.bedrooms}}</p>
                        <p>bathrooms {{single.schedulePlace.bathrooms}}</p>
                        <p>kitchen {{single.schedulePlace.kitchen}}</p>
                        <p>garage {{single.schedulePlace.garage}}</p>
                    </div>
                    <div class="text-wrapper" v-if="show == 3">
                        <p>Total area {{single.totalArea}}</p>
                        <p>Price {{single.price}} $</p>
                    </div>
                    <div class="text-wrapper" v-if="show == 4">
                        <p>{{single.localization}}</p>
                        <p>{{single.address}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'describe-text-content',
    props: ['single'],
    data() {
        return {
            show: 1
        }
    },
    methods: {
        
        showElement(value){

            this.show = value
        }
    },

}
</script>

<style scoped>

.title{
    cursor: pointer;
}

</style>