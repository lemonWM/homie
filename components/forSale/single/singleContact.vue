<template>
    <div v-if="single.offer_owner">
       <div class="single-contact-wrapper">
            <h3 class="title-contact">Contact with an offer owner</h3>
            <div class="wrapper-contact">
                <div class="contact-top">
                    <div class="side-img row" @click="goToUserDetails">
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
        },
        goToUserDetails(){

            this.$router.push(`/user/${this.single.offer_owner.first_name}`)
        }
    },
    components: {DatePicker}
}
</script>
