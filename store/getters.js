import vue from 'vue';

export default {

    getSelectedPlace: (state) => (localization) => {

        return state.sales.filter(function(sale){

            return sale.localization == localization
        })
    }
   
}