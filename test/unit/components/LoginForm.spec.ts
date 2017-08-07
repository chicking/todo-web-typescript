import LoginForm from '@/components/LoginForm.vue'
import store from '@/store'
import { expect } from 'chai'
import { div } from '../utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import faker from 'faker'

describe('LoginForm.vue', () => {

  const user = {
    _id: 1,
    name: faker.name.findName()
  }

  beforeEach(() => {
    const mock = new MockAdapter(axios)
    mock.onPost('/auth/login')
      .reply(200, {user})
  })

  it('login', done => {
    const vm = new LoginForm({
      el: div,
      store
    })

    expect(vm.loading).is.false

    vm.username = 'username'
    vm.password = 'password'

    const $btnLogin = vm.$el.querySelector('button.button')
    $btnLogin.click()

    expect(vm.loading).is.true

    process.nextTick(() => {
      expect(vm.$auth.isAuthenticated).is.true
      expect(vm.$auth.user.name).to.equals(user.name)
      done()
    })
  })
})
