import TodoList from '@/components/TodoList.vue'
import { expect } from 'chai'
import { div } from '../utils'

describe('TodoList.vue', () => {
  it('addTodo', () => {
    const vm = new TodoList({
      el: div
    })

    const content = 'todo'

    // add
    vm.content = content
    vm.addTodo()

    // empty content
    expect(vm.content).to.be.empty

    expect(vm.todos).to.have.lengthOf(1)
    const todo = vm.todos[0]

    expect(todo.content).to.equals(content)
    expect(todo.done).to.be.false
  })
})
