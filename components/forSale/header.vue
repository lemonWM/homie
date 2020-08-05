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
    background: rgba(219,219,219,0.28);
    background: -moz-linear-gradient(top, rgba(219,219,219,0.28) 0%, rgba(159,168,175,0.28) 53%, rgba(106,122,136,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(219,219,219,0.28)), color-stop(53%, rgba(159,168,175,0.28)), color-stop(100%, rgba(106,122,136,1)));
    background: -webkit-linear-gradient(top, rgba(219,219,219,0.28) 0%, rgba(159,168,175,0.28) 53%, rgba(106,122,136,1) 100%);
    background: -o-linear-gradient(top, rgba(219,219,219,0.28) 0%, rgba(159,168,175,0.28) 53%, rgba(106,122,136,1) 100%);
    background: -ms-linear-gradient(top, rgba(219,219,219,0.28) 0%, rgba(159,168,175,0.28) 53%, rgba(106,122,136,1) 100%);
    background: linear-gradient(to bottom, rgba(219,219,219,0.28) 0%, rgba(159,168,175,0.28) 53%, rgba(106,122,136,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dbdbdb', endColorstr='#6a7a88', GradientType=0 );
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
    background-color: #808d9c;
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