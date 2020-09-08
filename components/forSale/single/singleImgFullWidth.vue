<template>
    <div>
        <div>
            <button @click="change(-1)" class="button hollow slider-btn-left" :disabled='id === 0'>
                <i class="fas fa-chevron-circle-left arrow"></i>
            </button>
            <img :src="images[id]" alt="" @click="closePreview">
            <button @click="change(1)" class="button hollow slider-btn-right" :disabled='id === images.length-1'>
                <i class="fas fa-chevron-circle-right arrow"></i>   
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
        }
    },
}
</script>