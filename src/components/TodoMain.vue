<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li :class="{completed: item.flag}" v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.flag" @change="changeState(item.id)">
          <label>{{item.name}}</label>
          <button class="destroy" @click="delTodo(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
      </li>
    </ul>
  </section>
</template>

<script>
// import { mapState } from 'vuex'
// import { mapMutations } from 'vuex'
export default {
  computed: {
    list () {
      return this.$store.state.list
    }
  },
  methods: {
    changeState (id) {
      this.$store.commit('changeState', id)
    },
    delTodo (id) {
      this.$store.commit('delTodo', id)
    }
  }
}
</script>

<style>

</style>
