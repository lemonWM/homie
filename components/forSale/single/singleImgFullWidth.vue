<template>
    <div class="full-width-slider">
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
        <div>
            <button @click="closePreview">
                <i class="fa fa-times close"></i>
            </button>
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
.close{
    position: absolute;
    top: 5%;
    right: 5%;
    color: white;
    z-index: 9999999;
    font-size: 40px;
}
.arrow{
    border: none;
    color: white;
    font-size: 30px;
    padding: 10px;
}
.button.hollow, .button.hollow:focus, .button.hollow:hover {
    border: none;
}
</style>