import vue from 'vue';

export default{
    
    setSales(state, payload){

        state.sales = payload.sales
    },
    setLocalization(state, payload){

        state.localization = payload.localization
    },
    searchPlace(state, payload){
        
        state.searchPlace = payload.searchPlace
    },
    //loggin user
    loginUser(state, payload){

        state.user = payload.user
    },
    setAddressNewSale(state, payload){

        state.newSale.localization = payload.localization
        state.newSale.address = payload.address
    }, // set address in create new offer adresContent
    
    setDetailsNewSale(state, payload){

        state.newSale.price = payload.price
        state.newSale.schedulePlace.bedrooms = payload.bedrooms
        state.newSale.schedulePlace.bathrooms = payload.bathrooms
        state.newSale.schedulePlace.kitchen = payload.kitchen
        state.newSale.schedulePlace.garage = payload.garage
        state.newSale.totalArea = payload.totalArea
        state.newSale.description = payload.description
    }, // set details in create new offer detailsContent
}