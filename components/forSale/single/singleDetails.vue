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
    name: 'single-details',
    props: ['single'],
}
</script>