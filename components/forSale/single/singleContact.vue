<template>
    <div v-if="single.offer_owner">
       <div class="single-contact-wrapper">
            <h3 class="title-contact">Contact with an offer owner</h3>
            <div class="wrapper">
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
                <div class="contact row">
                    <button class="button" @click="showContact">Contact option</button>
                    <button>
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="contact-details" v-if="contact">
                    <div class="elements">
                        <div class="phone">
                            <button class="button">
                                <a :href="`tel:${single.offer_owner.phone}`">{{single.offer_owner.phone}}</a>
                            </button>
                        </div>
                        <div class="email">
                            <button class="button">
                                <a :href="`mailto:${single.offer_owner.email}`">{{single.offer_owner.email}}</a>
                            </button>
                        </div>
                    </div>
                    <button @click="contact =!contact">
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
</style>