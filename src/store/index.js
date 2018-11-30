import Vue from 'vue'
import Vuex from 'vuex'
import example from '@/store/modules/example'
import home from '@/store/modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    example,
    home
  }
})

export default store
