<template>
    <div v-if="single">
        <p>{{single.localization}}</p>
    </div>
</template>

<script>
export default {
    name: 'describe-text-content',
    props: ['single'],
    data() {
        return {
            
        }
    },

}
</script>