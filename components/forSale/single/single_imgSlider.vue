<template>
    <div>
        <figure v-for="(img, index) in single.photos">

            <img :src="img" alt="">

        </figure>
        <pre>{{single}}</pre>
    </div>
</template>

<script>
export default {
    name: 'img_slider',
    props: ['single']
}
</script>