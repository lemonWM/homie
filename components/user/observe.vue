<template>
    <div class="section-content observe">
        <h3>Observed offers by {{user.user}}</h3>
        <div v-if="!user.favourite.length">
            <p>{{user.user}} not add to favourite offer yet</p>
        </div>
        <div v-for="(single, index) in user.favourite" :key="index"
            class="single-observed--user-panel">
            <div class="row">
                <div class="thumb-element">
                    <button @click="go_to_offer(single._id)">
                        <img v-if="single.icon" class="offer-logo" :src="single.icon">
                        <img v-else src="../../static/img_random.png">
                    </button>
                </div>
                <div class="details">
                    <h3>{{single.localization}}</h3>
                    <p>{{single.address}}</p>

                    <div class="owner-details">
                        <p>Created by:</p>
                        <div class="owner-details--contact">
                            <button @click="go_to_user(single.owner.first_name)">
                                <img v-if="single.owner.photo" 
                                    class="owner-logo" :src="single.owner.photo">
                                <img v-else src="../../static/user-logo.png">
                            </button>
                            <div>
                                <p>{{single.owner.first_name}} {{single.owner.last_name}}</p>
                                <a :href="`mailto:${single.owner.email}`">
                                    <i class="fas fa-envelope-open"></i>
                                    {{ user.email }}
                                </a>
                            </div>
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
        },
        go_to_user(user){

            this.$router.push(`/user/${user}`)
        }
    },
}
</script>