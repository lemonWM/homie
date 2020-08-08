<template>
    <div class="sales-wrapper row">
        <div class="single-wrapper columns small-4" v-for="(single, index) in sales">
            <div class="single-sale-element ">
                <div class="img-element">
                    <figure>
                        <img :src="single.photos[0]" alt="">
                    </figure>               
                </div>
                <div>
                    <h3>${{single.price}}</h3>
                </div>
                <div>
                    <p>{{single.address}}</p>
                </div>
                <div>
                    <p>{{single.schedulePlace.bedrooms}} bedrooms / {{single.schedulePlace.bathrooms}} bathrooms / {{single.totalArea}} &sup2</p>
                </div>
                <div class="add-to-observe">
                    <button>
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'main-content',
    data() {
        return {
            
        }
    },
    created() {

        if(!this.$store.state.sales.length){
            this.getSales()
        }
    },
    computed: {
        
        sales(){

            return this.$store.state.sales
        }
    },
    methods: {
        getSales(){

        this.$axios.get('http://localhost:5000/sales')
            .then(({data})=>{
                
                this.setSales(data)
            })
            .catch(({error})=>{
                this.error = error
            })
        },
        setSales(data){

            this.$store.commit('setSales', {
                sales: data
            })
        }
    },
}
</script>