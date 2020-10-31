import vue from 'vue';

export default {

    getSelectedPlace: (state) => (localization) => {

        return state.sales.filter(function(sale){

            return sale.localization == localization
        })
    }, //filter return selected place by localization name - for sales
   
    get_selected_offer: (state) => (id) => {

        return state.sales.filter(function(single_offer){

            return single_offer._id == id
        })
    } // return single offer after add to observe button
}