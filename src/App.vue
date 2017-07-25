<template lang="html">
  <section class="section">
    <div class="content">
      <h1 class="title">
        Hello {{name}}!
      </h1>

      <todo-list></todo-list>

    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import TodoList from './components/TodoList.vue'

@Component({
  components: {
    TodoList
  }
})
export default class App extends Vue {
  public name: string = 'Todo'
}
</script>
