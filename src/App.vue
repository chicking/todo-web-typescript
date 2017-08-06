<template lang="html">
  <section class="section">

    <div class="content" v-if="$auth.isAuthenticated">
      <nav class="nav">
        <div class="nav-right">
          <div class="nav-item">
            {{$auth.user.name}}
          </div>
          <a class="nav-item" @click="$auth.logout()">
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

@Component({
  components: {
    TodoList, Login
  }
})
export default class App extends Vue {
}
</script>
