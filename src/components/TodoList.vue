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
              <input type="checkbox" v-model="todo.done" @change="update(todo)">
            </label>
          </td>
          <td-input v-model="todo.content" @change="update(todo)">
            {{ todo.content }}
          </td-input>
          <td>
            <button class="button is-danger is-outlined" @click="remove(todo)">
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
import TdInput from './TdInput.vue'
import { Todo } from '@/models'
import axios from 'axios'

@Component({
  components: {
    TdInput
  }
})
export default class TodoListComponent extends Vue {

  // data

  content: string = ''
  todos: Array<Todo> = []

  // lifecycle

  created(): void {
    this.fetchData()
  }

  // methods

  addTodo(): void {
    if (this.content === '') {
      return
    }

    const todo = {
      content: this.content
    }

    axios.post('/todo', todo)
      .then(res => {
        this.todos.push(res.data)
        this.clear()
      })
  }

  fetchData(): void {
    axios.get('/todo')
      .then(({data}) => {
        this.todos = data.todos
      })
  }

  clear(): void {
    this.content = ''
  }

  update(todo: Todo): void {
    const id = todo._id
    axios.put(`/todo/${id}`, todo)
  }

  remove(todo: Todo): void {
    const id = todo._id
    axios.delete(`/todo/${id}`)
      .then(() => {
        let idx = this.todos.findIndex(todo => todo._id === id)
        return this.todos.splice(idx, 1)
      })
  }
}

</script>
