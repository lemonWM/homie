import vue from 'vue';

export default{
    
    add(state, payload){

        state.counter += payload.value
    },
}