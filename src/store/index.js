import Vue from 'vue'
import Vuex from 'vuex'

import num from './modules/num'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    num
  }
})
