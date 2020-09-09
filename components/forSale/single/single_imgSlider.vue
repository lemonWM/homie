<template>
    <div v-if="images">
        <div class="slider-img">
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

<style scoped>

.img-element{
    width: 600px;
    border-radius: 20px;
    max-height: 400px;
}
.button{
    border: none;
}
.arrow{
    font-size: 35px;
    color: #3b4350;
}
.slider-img{
    position: relative;
    padding-right: 40px;    
}
.slider-wrapper{
    position: relative;
}
.slider-btn-left{
    position: absolute;
    left: 0px;
    height: 97%;
    width: 10%;
    margin: 0px;
    padding: 0px;
}
.slider-btn-right{
    position: absolute;
    right: 0px;
    height: 97%;
    width: 10%;
    margin: 0px;
    padding: 0px;
}
.pagination{
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-right: 50px;
}

.pagination a:hover, .pagination button:hover {
    background: #fff0;
}
.img-full-screen{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    min-height: 100vh;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.95);
    z-index: 99999;
    padding: 20px;
}
</style>