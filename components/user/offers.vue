<template>
    <div class="section-content--offers offers section-content">
        <h3>Sale & rents offers</h3>
        <div v-if="!user.sales.length & !user.rents.length">
            <p>{{user.user}} not published any offer yet</p>
        </div>   
        <div v-else>
            <div v-if="user.sales.length" class="content-offer--owner">
                <h3 class="section-title">User sales offer</h3>
                <div v-for="(single, index) in user.sales"  :key="index" class="single">
                    <div class="row">
                        <div class="thumb-element">
                            <button @click="go_to_offer(single._id)">
                                <img v-if="single.photo" class="offer-logo" :src="single.photo">
                                <img v-else src="../../static/img_random.png">
                            </button>
                        </div>
                        <div class="details">
                            <h3>{{single.localization}}</h3>
                            <p class="item1">{{single.address}}</p>
                            <p class="item2">Total cost: {{single.price}} $</p>
                            <p class="item3">Area: {{single.totalArea}} ft.&sup2</p>
                            <p class="item4">Offer type: {{single.type}}</p>
                        </div>
                    </div>
                </div>  
            </div>
            <div v-if="user.rents.length" class="content-offer--owner">
                <h3 class="section-title">User rents offer</h3>
                <div v-for="(single, index) in user.rents"  :key="index" class="single">
                    <div class="row">
                        <div class="thumb-element">
                            <button @click="go_to_offer(single._id)">
                                <img v-if="single.photo" class="offer-logo" :src="single.photo">
                                <img v-else src="../../static/img_random.png">
                            </button>
                        </div>
                        <div class="details">
                            <h3>{{single.localization}}</h3>
                            <p class="item1">{{single.address}}</p>
                            <p class="item2">Total cost: {{single.price}} $</p>
                            <p class="item3">Area: {{single.totalArea}} ft.&sup2</p>
                            <p class="item4">Offer type: {{single.type}}</p>
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

             this.$router.push(`/forSale/${id}`)
        }
    },
}
</script>