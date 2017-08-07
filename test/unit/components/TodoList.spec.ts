import TodoList from '@/components/TodoList.vue'
import { expect } from 'chai'
import { newVM, nextTick } from '../utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import faker from 'faker'

describe('TodoList.vue', () => {

  it('fetchData', async () => {
    const mock = new MockAdapter(axios)
    mock
    .onGet('/todo')
      .reply(200, {
        todos: [
          { _id: '1', content: 'todo1', done: false }
        ]
      })

    const vm: TodoList = newVM(TodoList)

    expect(vm.todos).to.have.lengthOf(0)

    await nextTick() // fetchData()

    expect(vm.todos).to.have.lengthOf(1)
  })

  it('addTodo and remove', async () => {
    const todo = {
      _id: faker.random.uuid(),
      content: faker.lorem.sentence(),
      done: false
    }

    const mock = new MockAdapter(axios)
    mock
      .onGet('/todo').reply(200, {todos: []})
      .onPost('/todo').reply(201, todo)
      .onDelete('/todo/' + todo._id).reply(200)

    const vm: TodoList = newVM(TodoList)

    vm.content = todo.content
    vm.addTodo()

    await nextTick() // addTodo()

    expect(vm.todos, 'todos 1').to.have.lengthOf(1)

    vm.remove(todo)

    await nextTick() // remove()
    await vm.$nextTick() // update this.todos

    expect(vm.todos, 'todos 0').to.have.lengthOf(0)
  })
})
