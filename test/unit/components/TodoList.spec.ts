import TodoList from '@/components/TodoList.vue'
import { expect } from 'chai'
import { div } from '../utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import faker from 'faker'

describe('TodoList.vue', () => {

  it('fetchData', done => {
    const mock = new MockAdapter(axios)
    mock
    .onGet('/todo')
      .reply(200, {
        todos: [
          { _id: '1', content: 'todo1', done: false }
        ]
      })

    const vm = new TodoList({
      el: div
    })

    expect(vm.todos).to.have.lengthOf(0)
    process.nextTick(() => {
      expect(vm.todos).to.have.lengthOf(1)
      done()
    })
  })

  it('addTodo and remove', done => {
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

    const vm = new TodoList({
      el: div
    })

    vm.content = todo.content
    vm.addTodo()

    process.nextTick(() => {
      expect(vm.todos).to.have.lengthOf(1)

      vm.remove(todo)

      vm.$nextTick(() => {
        process.nextTick(() => {
          expect(vm.todos).to.have.lengthOf(0)
          done()
        })
      })
    })
  })
})
