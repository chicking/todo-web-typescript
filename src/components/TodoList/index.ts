import Vue from 'vue'
import Component from 'vue-class-component'
import TdInput from '@/components/TdInput'
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
      .then(({ data }) => {
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
