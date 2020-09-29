import Vue from 'vue'
import * as VueGoogleMaps from '../node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDSpLefX1gn7woT-vc6wRnFLmrVeQ1H8fM',
    libraries: 'places',
  },
  installComponents: true
})