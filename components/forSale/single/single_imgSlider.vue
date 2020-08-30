<template>
    <div v-if="images">
        <div class="slider-img">
            <div class="slider-wrapper">
                <button @click="change(-1)" class="button hollow" :disabled='id === 0'>X</button>

                <figure >
                    <img :src="images[id]" alt="">
                </figure>

                <button @click="change(1)" class="button hollow" :disabled='id === images.length-1'>X</button>
            </div>      
            <div v-for="(img, index) in images" class="row" :key="img">
                <div v-if="index === id">
                    <button>
                        <i class="fas fa-circle"></i>
                    </button>
                </div>
                <div v-else>
                    <button @click="selectID(index)">
                        <i class="far fa-circle" ></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'img_slider',
    props: ['single'],
    data() {
        return {
            id: 0
        }
    },
    computed: {
        
        images(){

            return this.single.photos
        }
    },
    methods: {
        
        change(value){

            this.id += value
        },
        selectID(index){

            this.id = index
        }
    }
}
</script>