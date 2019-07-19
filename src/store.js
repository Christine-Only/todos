import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  list: [
    { id: 1, name: '吃饭', flag: false },
    { id: 2, name: '睡觉', flag: true },
    { id: 3, name: '打豆豆', flag: false }
  ]
}

const mutations = {
  changeState (state, id) {
    const item = state.list.find(v => v.id === id)
    item.flag = !item.flag
  },
  delTodo (state, id) {
    state.list = state.list.filter(v => v.id !== id)
  },
  addTodo (state, name) {
    const item = {
      id: Date.now(),
      name,
      flag: false
    }
    state.list.unshift(item)
  }
}
const store = new Vuex.Store({
  state,
  mutations
})

export default store
