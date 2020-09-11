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
                        <date-picker v-model="time2" type="datetime"></date-picker>
                    </div>
                </div>
                <div class="contact row">
                    <button class="button">Contact option</button>
                    <button>
                        <i class="far fa-heart"></i>
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
            time1: null,
            time2: null,
            time3: null
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