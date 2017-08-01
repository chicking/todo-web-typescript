import LoginForm from '@/components/LoginForm.vue'
import { expect } from 'chai'
import { div } from '../utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)
mock
  .onPost('/todo/api/auth/login')
    .reply(200, {
      user: {
        id: 1,
        name: 'test'
      }
    })

describe('LoginForm.vue', () => {
  it('login', () => {
    const vm = new LoginForm({
      el: div
    })

    expect(vm.loading).is.false

    vm.username = 'username'
    vm.password = 'password'

    const $btnLogin = vm.$el.querySelector('button.button')
    $btnLogin.click()

    expect(vm.loading).is.true
  })
})
