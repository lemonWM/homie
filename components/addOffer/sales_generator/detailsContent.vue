<template>
    <div>
        <div class="item-new-offer" v-if="!preview">
            <div class="col-wrap">
                <label for="price">Price: </label>
                <input type="numebr" id="price" class="input-sels" placeholder="Value of place in $" v-model="price">
            </div>
            <div class="col-wrap">
                <label for="bedrooms">Bedrooms: </label>
                <input type="numebr" id="bedrooms" class="input-sels" placeholder="Select number of rooms" v-model="bedrooms">
            </div>
            <div class="col-wrap">
                <label for="bathrooms">Bathrooms: </label>
                <input type="numebr" id="bathrooms" class="input-sels" placeholder="Select number of bathrooms" v-model="bathrooms">
            </div>
            <div class="col-wrap">
                <label for="kitchen">Kitchens: </label>
                <input type="numebr" id="kitchen" class="input-sels" placeholder="Select number of kitchens" v-model="kitchen">
            </div>
            <div class="col-wrap">
                <label for="garage">Garage: </label>
                <input type="numebr" id="garage" class="input-sels" placeholder="Select number of rooms" v-model="garage">        
            </div>
            <div class="col-wrap">
                <label for="area">Total area: </label>
                <input type="text" id="area" class="input-sels" placeholder="Ft value area" v-model="totalArea">        
            </div>
            <div>
                <label for="garage">Describe: </label>
                <textarea name="" id="garage" cols="30" rows="5" class="input-sels" placeholder="Tell the story of the place" v-model="description"></textarea> 
            </div>
            <button class="hollow home-btn" @click="setInformation">Confirm all</button>
        </div> 

        <div v-if="preview">
            <div class="preview-details">
                <p>Price in $: <span>{{returnDetails.price}}</span></p>
                <p>Bedrooms: <span>{{returnDetails.schedulePlace.bedrooms}}</span></p>
                <p>Bathrooms: <span>{{returnDetails.schedulePlace.bathrooms}}</span></p>
                <p>Kitchens: <span>{{returnDetails.schedulePlace.kitchen}}</span></p>
                <p>Garages: <span>{{returnDetails.schedulePlace.garage}}</span></p>
                <p>Total area in ft: <span>{{returnDetails.totalArea}}</span></p>
                <p>Description: <span>{{returnDetails.description}}</span></p>
                <button class="hollow button-generate" @click="preview =! preview">Edit details</button>
            </div>
        </div>     
    </div>

</template>

<script>
export default {
    name: 'details-content',
    data() {
        return {
            preview: false,
            price: '',
            bedrooms: '',
            bathrooms: '',
            kitchen: '',
            garage: '',
            totalArea: '',
            description:'', 
        }
    },
    computed: {
        
        returnDetails(){

            return this.$store.state.newSale
        }
    },
    methods: {
        
        setInformation(){

            this.$store.commit('setDetailsNewSale',{
                price: this.price,
                bedrooms: this.bedrooms,
                bathrooms: this.bathrooms,
                kitchen: this.kitchen,
                garage: this.garage,
                totalArea: this.totalArea,
                description: this.description
            })

            this.preview =! this.preview
        }
    },
}
</script>