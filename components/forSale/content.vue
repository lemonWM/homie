<template>

    <div class="sales-wrapper">
        <div v-if="getLocalization.length">
            <p>Results match for '{{getLocalization}}'</p>
        </div>
        <div class="row">
            <div class="single-wrapper columns small-4" v-for="(single, index) in sales" :key="single._id">
                <div class="single-sale-element ">
                    <article @click='goToSingle(single._id)' class="element-sale">
                        <div class="img-element">
                            <figure>
                                <img :src="single.photos[0]" alt="" class="img-single">
                            </figure>               
                        </div>
                        <div>
                            <h3 class="price">${{single.price}}</h3>
                        </div>
                        <div>
                            <p class="address">{{single.localization}} {{single.address}}</p>
                        </div>
                        <div>
                            <p class="details">{{single.schedulePlace.bedrooms}} bedrooms / {{single.schedulePlace.bathrooms}} bathrooms / {{single.totalArea}} &sup2</p>
                        </div>          
                    </article>
                    <div class="add-to-observe">
                        <button>
                            <i class="far fa-heart add-to-observe-icon"></i>
                        </button>
                    </div>  
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
        },
        getLocalization(){

            return this.$store.state.localization
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
        },
        goToSingle(id){
            
            this.$router.push(`/forSale/${id}`)
        }
    }
}
</script>

<style scoped>

.sales-wrapper{
    padding-top: 30px;
}
.element-sale{
    cursor: pointer;
}
.single-wrapper{
    background-color: #505767;
    margin: 20px;
    border-radius: 10px;
    border-radius: 30px;
}

.single-sale-element{
    padding-top: 15px;
    padding-bottom: 10px;
    position: relative;
    
}
.img-single{
    border-radius: 20px;
}
.price{
    color: #c2f9df;
    font-size: 24px;
}
.address{
    color: #86959c;
    margin-bottom: 5px;
}
.details{
    font-size: 14px;
    margin-bottom: 5px;
    color: #86959c;
}
.add-to-observe{
    position: absolute;
    top: 26px;
    right: 10px;
    background-color: #505767;
    padding: 10px 15px;
    border-radius: 15px;   
}
.add-to-observe-icon{
    color: #c2f9df;
    font-size: 18px;
}
</style>