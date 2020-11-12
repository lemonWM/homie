<template>
    <div class="section-content--offers offers">
        <h2>Sale & rents offers</h2>
        <div v-if="!user.sales.length & !user.rents.length">
            <p>{{user.user}} not published any offer yet</p>
        </div>   
        <div v-else>
            <div v-if="user.sales.length" class="content-offer--owner">
                <h3>User sales offer</h3>
                <div v-for="(sale, index) in user.sales"  :key="index" class="single">
                    <p>{{sale}}</p>
                </div>  
            </div>
            <div v-if="user.rents.length" class="content-offer--owner">
                <h3>User rents offer</h3>
                <div v-for="(single, index) in user.rents"  :key="index" class="single">
                    <div class="row">
                        <div class="thumb-element">
                            <button @click="go_to_offer(single._id)">
                                <img class="offer-logo" :src="single.photo" alt="logo">
                            </button>
                        </div>
                        <div class="details">
                            <h3>{{single.localization}}</h3>
                            <p>{{single.address}}</p>
                            <p>Total cost: {{single.price}} $</p>
                            <p>Area: {{single.totalArea}} ft.&sup2</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'observe',
    props: ['user'],
    methods: {
        
        go_to_offer(id){

        },
        go_to_user(){

        }
    },
}
</script>