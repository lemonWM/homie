<template>
    <div class="section-content observe">
        <h3>Observed</h3>
        <div v-for="(single, index) in user.favourite" :key="index"
            class="single-observed--user-panel">
            <div class="row">
                <div class="thumb-element">
                    <button @click="go_to_offer(single._id)">
                        <img class="offer-logo" :src="single.icon" alt="logo">
                    </button>
                </div>
                <div class="details">
                    <h3>{{single.localization}}</h3>
                    <p>{{single.address}}</p>

                    <div class="owner-details">
                        <p>Created by:</p>
                        <div class="">
                            <img class="owner-logo" :src="single.owner.photo" alt="">
                            <div >
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

            <pre>{{single}}</pre>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'observe',
    props: ['user'],
    methods: {
        
        go_to_offer(id){
            console.log(id)
        }
    },
}
</script>