<template>
    <div v-if="images">
        <div class="slider-img">
            <div class="slider-wrapper">
                <button @click="prev" class="button hollow" :disabled='id === 0'>X</button>

                <figure >
                    <img :src="images[id]" alt="">
                </figure>

                <button @click="next" class="button hollow" :disabled='id === images.length-1'>X</button>
            </div>
        
            <div v-for="(img, index) in images" class="row" :key="img">
                <div v-if="index === id">
                    <i class="fas fa-circle"></i>
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
        
        prev(){

            this.id -= 1
        },
        next(){

            this.id +=1
        },
        selectID(index){

            this.id = index
        }
    }
}
</script>