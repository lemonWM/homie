<template>
    <div>
        <figure v-for="(img, index) in single.photos">

            <img :src="img" alt="">

        </figure>
        <p>ddsdsd</p>
    </div>
</template>

<script>

export default {
    name: 'single-details',
    props: ['single'],
}
</script>