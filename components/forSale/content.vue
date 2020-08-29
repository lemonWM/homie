<template>
    <div class="sales-wrapper">
        <div v-if="getLocalization">
            <div >
                <h3>Results match for '{{getLocalization}}'</h3>
            </div>
            <div class="module-map">
                <mapModule @pointered='setClass' :rotatedPin='rotatedPin'/>   
            </div>
        </div>
        <div class="row item-wrapper">
            <div class="single-wrapper columns small-3" 
                v-for="(single, index) in sales" 
                :key="single._id"
                :class="{'active': (single._id === activeID)}"
                @mouseover="rotetePin(single.geolocalization)"
                >
                <div class="single-sale-element">
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

import mapModule from '../gMapsModul/moduleMapGoogle'

export default {
    name: 'main-content',
    data() {
        return {
            activeID: '',
            rotatedPin: {}
        }
    },
    created() {

        if(!this.$store.state.sales.length){
            this.getSales()
        }
    },
    computed: {
        
        sales(){

            if(this.$store.state.searchPlace === ''){

                return this.$store.state.sales
            } else {

                return this.$store.getters.getSelectedPlace(this.$store.state.searchPlace) 
            }  
        },
        getLocalization(){

            return this.$store.state.localization.locality
        },
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
        },
        setClass(value){

            this.activeID = value

        },// add class active to item selected on google maps pin click
        rotetePin(value){
  
            this.rotatedPin = value
        }
    },
    components: {mapModule}
}
</script>

<style scoped>

.sales-wrapper{
    padding-top: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
.active{
    -webkit-box-shadow: 0px 0px 5px 0px rgba(193,247,221,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(193,247,221,1);
    box-shadow: 0px 0px 5px 0px rgba(193,247,221,1);
}
</style>