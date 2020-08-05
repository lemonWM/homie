

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0,

    }),
    getters,
    mutations,
    actions
  })
}

export default createStore
