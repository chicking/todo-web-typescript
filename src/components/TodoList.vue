<template lang="html">
  <div class="container">
    <section class="section">
      <div class="content">
        <div class="field is-grouped">
          <p class="control is-expanded">
            <input type="text" v-model="content" class="input" placeholder="Enter your tasks..." @keyup.enter="addTodo()">
          </p>
          <p class="control">
            <a class="button" @click="addTodo()">
              Save
            </a>
          </p>
        </div>
      </div>
    </section>
    <table class="table">
      <thead>
        <th style="width: 30px;"></th>
        <th>Tasks</th>
        <th style="width: 30px;"></th>
      </thead>
      <tbody>
        <tr v-for="todo of todos" :key="todo._id">
          <td>
            <label class="checkbox">
              <input type="checkbox" v-model="todo.done">
            </label>
          </td>
          <td>
            {{ todo.content }}
          </td>
          <td>
            <button class="button is-danger is-outlined" @click="removeTodo(todo._id)">
              <span class="icon is-small">
                <i class="fa fa-remove"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TodoListComponent extends Vue {

  content: string = ''
  todos: Array<Todo> = []

  addTodo() {
    if (this.content === '') {
      return
    }

    const todo = {
      content: this.content
    }

    const _id: string = '' + (this.todos.length + 1)

    this.todos.push({
      _id,
      ...todo,
      done: false
    })

    this.clear()
  }

  clear() {
    this.content = ''
  }

  removeTodo(id: string) {
    const idx = this.todos.findIndex((todo: Todo) => todo._id === id)
    this.todos.splice(idx, 1)
  }
}

</script>
