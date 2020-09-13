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
        goSels(){

            this.$router.push({name: 'forSale'})
        }
    },
}
</script>

<style>

.header{
    background-image: url('../../static/home_01.png');
    background-position: center;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0px;
    padding-top: 40px;
    z-index: 1;
}
h1{
    color: white;
    text-align: center;
}
span{
    color:#af9668 ;
}
.home-content{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
}
.shadow{
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.77);
    z-index: -1;
}
.home-btn{
    margin: 30px 0px;
    padding: 14px 45px;
    border: 1px solid #af9668;
    color: #af9668;
    border-radius: 8px;
    font-size: 18px;
}
</style>