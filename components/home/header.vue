<template>
<div class="header">
    <div class="home-content">
        <div class="title">
            <h1>We're <span>Homie</span>, We sels home for humans</h1>
        </div>
        <div>
            <button type="button" class="hollow  home-btn" @click="goSels">Find home</button>
        </div>
    </div>
    <div class="shadow"></div>
</div>
</template>

<script>
export default {
    name: 'home-header',
    methods: {
        goSels() {

            this.$router.push({
                name: 'forSale'
            })
        }
    },
}
</script>
