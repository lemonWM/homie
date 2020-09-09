<template>
    <div>
        <div>
            <button @click="change(-1)" class="button hollow slider-btn-left" :disabled='id === 0'>
                <i class="fas fa-chevron-circle-left arrow"></i>
            </button>
            <img :src="images[id]" class="img-max-width" @click="closePreview">
            <button @click="change(1)" class="button hollow slider-btn-right" :disabled='id === images.length-1'>
                <i class="fas fa-chevron-circle-right arrow"></i>   
            </button>
        </div>
        <div class="bottom-prev">
            <div v-for="(img, index) in images" @click="selectImg(index)">
                <img :src="img" alt="" class="thumbnail" >
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'full-page-img-slider',
    props: ['images'],
    data() {
        return {
            id: 0
        }
    },
    methods: {
        change(value){

            this.id += value
        },
        closePreview(){

            this.$emit('close', false)
        },
        selectImg(value){
            
            this.id = value
        }
    },
}
</script>

<style scoped>

.img-max-width{
    max-width: 700px;
}

.bottom-prev{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.thumbnail{
    width: 80px;
    height: 60px;
    margin: 5px 15px;
}

</style>