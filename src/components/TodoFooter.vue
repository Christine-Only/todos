<template>
  <footer class="footer" v-show="showFooter">
    <span class="todo-count"><strong>{{unfinished}}</strong> item left</span>
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clearTodo" v-show="showClear">Clear completed</button>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    // unfinished () {
    //   // return this.$store.state.list.filter(v => !v.flag).length
    //   return this.$store.getters.leftCount
    // },
    // showFooter () {
    //   return this.$store.getters.showFooter
    // },
    // showClear () {
    //   return this.$store.getters.showClear
    // }
    // 注意: 当组件中的计算属性名称和store中的名称不同时,想要用展开辅助函数,必须用对象形式
    ...mapGetters({
      unfinished: 'leftCount',
      showFooter: 'showFooter',
      showClear: 'showClear'
    })
  },
  methods: {
    // 点击清除已完成的按钮,延迟1s再删除
    /*
      注意点:
      1. mutatinos只支持同步函数,所以如果想在mutations中写异步代码,会报错,此时需要用到actions
    */
    clearTodo () {
      // setTimeout(() => {
      //   this.$store.commit('clearTodo')
      // }, 1000)
      this.$store.dispatch('clearTodoAsync')
    }
  }
}
</script>

<style>

</style>
