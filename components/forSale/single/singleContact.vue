<template>
    <div v-if="single.offer_owner">
       <div class="single-contact-wrapper">
            <h3 class="title-contact">Contact with an offer owner</h3>
            <div class="wrapper-contact">
                <div class="contact-top">
                    <div class="side-img row">
                        <div>
                            <img :src="single.offer_owner.photo" alt="user" class="contact-img">
                        </div>
                        <div class="name">
                            <p class="first-name">{{single.offer_owner.first_name}}</p>
                            <p class="last-name">{{single.offer_owner.last_name}}</p>             
                        </div>
                    </div>
                    <div class="calendar">
                        <p>Select a tour date</p>
                        <div class="">
                            <date-picker v-model="date" type="datetime"></date-picker>
                            <div v-if="date">
                                <button class="button">Send proposition</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-bottom">
                    <button class="button" @click="showContact">Contact option</button>
                    <button class="button">
                        Add to watch list
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="contact-details" v-if="contact">
                    <div class="elements row">
                        <div class="phone">
                            <button class="button">
                                <a :href="`tel:${single.offer_owner.phone}`">
                                    <i class="fas fa-phone-alt"></i>
                                {{single.offer_owner.phone}}</a>
                            </button>
                        </div>
                        <div class="email">
                            <button class="button">
                                <a :href="`mailto:${single.offer_owner.email}`">
                                    <i class="fas fa-envelope-open"></i>
                                {{single.offer_owner.email}}</a>
                            </button>
                        </div>
                    </div>
                    <button @click="contact =!contact" class="close-preview-contact">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
       </div>
    </div>
</template>

<script>

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
    name: 'contact',
    props: ['single'],
    data() {
        return {
            date: null,
            contact: false
        }
    },
    methods: {
        showContact(){

            this.contact =! this.contact
        }
    },
    watch: {
        
        date(val){
            console.log(val)
        }
    },
    components: {DatePicker}
}
</script>

<style>
.title-contact{
    font-size: 32px;
    color: #c2f9df;
}

.single-contact-wrapper{
    max-width: 600px;
    margin-top: 40px;
}
.contact-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    background-color: #505767;
    padding: 20px;
    border-radius: 20px;
    margin-top: 30px;
}
.wrapper-contact{
    position: relative;
}
.contact-img{
    width: 72px;
    height: 72px;
    border-radius: 100px;
}

.name p{
    margin: 0;
    color: #86959c;
    font-size: 20px;
    margin-left: 15px;
    margin-bottom: 5px;
}
.calendar p{
    font-size: 20px;
    color: #c2f9df;
}
.mx-input-wrapper input{
    background-color: inherit;
    color: #c2f9df;
    border-color: #3b4350;
}
.mx-input:hover, .mx-input:focus{
    background-color: inherit;
}
.mx-icon-calendar, .mx-icon-clear{
    color: #86959c;
    font-size: 16px;
    top: 38%;
}
.contact-details{
    position: absolute;
    top: 0px;
    background: #353535e6;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 20px;
}
.contact-bottom{
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    align-items: c;
    justify-content: space-between;
    align-items: baseline;
    padding: 0px 20px;
}
.contact-bottom button{
    background-color: #505767;
    border-radius: 10px;
    padding: 15px 30px;
    font-size: 18px;
}
.close-preview-contact{
    position: absolute; 
    top: 5px;
    right: 25px;
    font-size: 30px;
    color: #acacacbf;
}
.phone button, .email button{
    margin: 15px;
    width: 250px;
    background-color: #86959c;
    border-radius: 10px;
}
</style>