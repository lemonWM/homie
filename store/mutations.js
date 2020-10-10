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

    setImgNewSale(state, payload){
        
        state.newSale.photos = payload.photos
    }, // set img url in create new offer photosDetails

    setOfferOwnerNewSale(state, payload){
        state.newSale.offer_owner._id = payload._id
        state.newSale.offer_owner.first_name = payload.first_name 
        state.newSale.offer_owner.last_name = payload.last_name
        state.newSale.offer_owner.email = payload.email
        state.newSale.offer_owner.phone = payload.phone
        state.newSale.offer_owner.photo = payload.photo
    }, // set offer -owner from logged user new offer mainContent

    setSaleTypeNewSale(state, payload){
        
        state.newSale.type = payload.type
    } // set type of transaction - sale/rent new offer mainContent
}