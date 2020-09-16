

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      sales: [],
      rents:[],
      user: {}, // logged user, object with user login, _id, logo url
      userDetails: {}, // full user object
      localization: {},
      salesItemLocalizations: [],
      searchPlace: ''

    }),
    getters,
    mutations,
    actions
  })
}

export default createStore
