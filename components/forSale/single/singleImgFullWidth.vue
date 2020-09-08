<template>
    <div>
        <div v-for="img in images">
            <img :src="img" alt="">
        </div>
    </div>

</template>

<script>
export default {
    name: 'full-page-img-slider',
    props: ['images'],
    data() {
        return {
            
        }
    },
}
</script>