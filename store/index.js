

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      sales: [],
      rents:[],
      user:'',
      localization:''

    }),
    getters,
    mutations,
    actions
  })
}

export default createStore
