<template lang="html">
  <section class="section">

    <login :active.sync="isLoginActive" v-if="isLoginActive"></login>

    <div class="content" v-else>
      <h1 class="title">
        Hello {{name}}!
      </h1>
      <a class="button" @click="isLoginActive = true">Login</a>

      <todo-list></todo-list>

    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import TodoList from '@/components/TodoList.vue'
import Login from '@/components/Login.vue'

@Component({
  components: {
    TodoList, Login
  }
})
export default class App extends Vue {
  public name: string = 'Todo'
  public isLoginActive: boolean = false
}
</script>
