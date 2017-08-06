<template lang="html">
  <section class="section">

    <div class="content" v-if="isAuthenticated">
      <nav class="nav">
        <div class="nav-right">
          <div class="nav-item">
            {{username}}
          </div>
          <a class="nav-item" @click="logout()">
            <span class="icon">
              <i class="fa fa-sign-out"></i>
            </span>
          </a>
        </div>
      </nav>

      <todo-list></todo-list>

    </div>

    <login v-else></login>

  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import TodoList from '@/components/TodoList.vue'
import Login from '@/components/Login.vue'

import axios from 'axios'
import token from './bootstrap/token'

@Component({
  components: {
    TodoList, Login
  }
})
export default class App extends Vue {

  // getters

  @Getter isAuthenticated: boolean
  @Getter username: string

  // methods

  logout(): void {
    token.remove()
    axios.defaults.headers['Authorization'] = null

    this.$store.dispatch('logout')
  }
}
</script>
