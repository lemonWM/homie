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
    } // set address in create new offer adresContent

}