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
  },
  // 编辑任务时,mutations提供的函数中,只能有两个参数,所以当需要很多个参数时,需要放到一个对象payload中
  editTodo (state, payload) {
    const item = state.list.find(v => v.id === payload.id)
    item.name = payload.name
  },
  clearTodo (state) {
    state.list = state.list.filter(v => !v.flag)
  }
}

const getters = {
  showFooter (state) {
    return state.list.length > 0
  },
  leftCount (state) {
    return state.list.filter(v => !v.flag).length
  },
  showClear (state) {
    return state.list.some(v => v.flag)
  }
}

const actions = {
  clearTodoAsync (context) {
    // console.log(context)
    setTimeout(() => {
      context.commit('clearTodo')
    }, 1000)
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
