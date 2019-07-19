<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li :class="{completed: item.flag, editing: item.id === current}" v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.flag" @change="changeState(item.id)">
          <label @dblclick="showEdit(item.id)">{{item.name}}</label>
          <button class="destroy" @click="delTodo(item.id)"></button>
        </div>
        <!-- 编辑内容时,不能直接更改state中的数据,所以不能使用v-model -->
        <input class="edit" :value="item.name" @keyup.enter="editTodo($event)">
      </li>
    </ul>
  </section>
</template>

<script>
// import { mapState } from 'vuex'
// import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      current: -1
    }
  },
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
    },
    showEdit (id) {
      this.current = id
    },
    editTodo (e) {
      this.$store.commit('editTodo', {
        id: this.current,
        name: e.target.value
      })
      this.current = -1
    }
  }
}
</script>

<style>

</style>
