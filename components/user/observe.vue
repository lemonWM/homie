<template>
    <div>

        <div v-for="(observe, index) in user.favourite" :key="index">
            <div>{{observe}}</div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'observe',
    props: ['user']
}
</script>