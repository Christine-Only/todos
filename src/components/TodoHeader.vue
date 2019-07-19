<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus v-model="name" @keyup.enter="addTodo">
  </header>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    addTodo () {
      this.$store.commit('addTodo', this.name)
      this.name = ''
    }
  }
}
</script>

<style>

</style>
