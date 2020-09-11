<template>
    <div v-if="single.offer_owner">
       <div class="single-contact-wrapper">
            <h3>Contact with an offer owner</h3>
            <div class="wrapper">
                <div class="row">
                    <img :src="single.offer_owner.photo" alt="user">
                    <div>
                        <p class="first-name">{{single.offer_owner.first_name}}</p>
                        <p class="last-name">{{single.offer_owner.last_name}}</p>
                    </div>
                    <div class="calendar">
                        <p>Select a tour date</p>
                        <date-picker v-model="date" type="datetime"></date-picker>
                    </div>
                </div>
                <div class="contact row">
                    <button class="button" @click="showContact">Contact option</button>
                    <button>
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                <div class="contact-details" v-if="contact">
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

            this.contact = true
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

<style scoped>

.single-contact-wrapper{
    max-width: 600px;
}

</style>