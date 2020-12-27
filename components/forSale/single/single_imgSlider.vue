<template>
    <div v-if="images">
        <div class="slider-img__main">
            <div class="slider-wrapper row">
                <button @click="change(-1)" class="button hollow slider-btn-left" :disabled='id === 0'>
                    <i class="fas fa-chevron-circle-left arrow"></i>
                </button>

                <figure >
                    <img :src="images[id]" alt="" class="img-element"  @click="preview =! preview">
                </figure>

                <button @click="change(1)" class="button hollow slider-btn-right" :disabled='id === images.length-1'>
                    <i class="fas fa-chevron-circle-right arrow"></i>
                </button>
            </div>
            <section class="pagination">
                <div v-for="(img, index) in images" class="" :key="img">
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
            </section>      
        </div>
        <div v-if="preview" class="img-full-screen">
            <imgSliderWidth :images='images' class="img-fs-preview" @close='closePreview'/>
        </div>
    </div>
</template>

<script>

import imgSliderWidth from './singleImgFullWidth'

export default {
    name: 'img_slider',
    props: ['single'],
    data() {
        return {
            id: 0,
            preview: false
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
        },
        closePreview(value){

            this.preview = value
        }
    },
    components: {

        imgSliderWidth
    }
}
</script>
