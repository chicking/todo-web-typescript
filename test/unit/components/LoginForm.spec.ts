import LoginForm from '@/components/LoginForm.vue'
import store from '@/store'
import { expect } from 'chai'
import { div } from '../utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('LoginForm.vue', () => {
  before(() => {
    const mock = new MockAdapter(axios)
    mock.onPost('/auth/login')
      .reply(200, {
        user: {
          id: 1,
          name: 'test'
        }
      })
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
      expect(vm.loading).is.false
      expect(vm.$store.getters.isAuthenticated).is.true
      expect(vm.$store.getters.username).to.equals('test')
      done()
    })
  })
})
