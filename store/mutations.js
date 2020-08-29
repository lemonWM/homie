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
    }
}