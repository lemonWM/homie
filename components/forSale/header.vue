<template>
    <div class="main-content sale">
        <div class="header"></div>
        <div class="header-content">
            <h1 class="title">Search for best location</h1>
            <div class="input-search-wrapper">
                <input type="text" placeholder="Enter city, ex. 'Los Angeles'" class="input-sels">
                <button class="search-btn">
                    <i class="fa fa-search"></i>
                </button>
                
            </div>
        </div>
        <div class="dimmed"></div>
    </div>
</template>

<style scoped>
.sale{
    min-height: 360px;
}
.header{
    background-image: url('../../static/place1.jpg');
    width: 100%;
    max-height: 400px;
    background-position: center;
}
.header-content{
    z-index: 999;
    position: absolute;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.dimmed{
    position: absolute;
    height: 400px;
    width: 100%;
    top: 0px; 
    z-index: 1; 
    background: rgba(255,255,255,0);
    background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(206,208,211,0) 25%, rgba(59,67,80,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,255,255,0)), color-stop(25%, rgba(206,208,211,0)), color-stop(100%, rgba(59,67,80,1)));
    background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(206,208,211,0) 25%, rgba(59,67,80,1) 100%);
    background: -o-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(206,208,211,0) 25%, rgba(59,67,80,1) 100%);
    background: -ms-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(206,208,211,0) 25%, rgba(59,67,80,1) 100%);
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(206,208,211,0) 25%, rgba(59,67,80,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#3b4350', GradientType=0 );
}
.title{
    color: #c2f9df;
    font-weight: 500;
    font-size: 56px;
    text-shadow: 1px 1px 25px rgb(0, 0, 0);
}

.input-search-wrapper{
    position: relative;
    margin-top: 40px;
}
.input-sels{
    background-color: #505767;
    border: none;
    box-shadow: none;
    border-radius: 15px;
    padding: 10px 30px;
    color: #bcced3;
    height: auto;
    width: 340px;
    font-size: 22px;
}
.search-btn{
    position: absolute;
    top: -2px;
    right: 6px;
    font-size: 25px;
    padding: 10px;
    color: #c2f9df;
}
</style>