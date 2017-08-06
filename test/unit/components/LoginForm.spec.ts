import LoginForm from '@/components/LoginForm.vue'
import store from '@/store'
import { expect } from 'chai'
import { div } from '../utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('LoginForm.vue', () => {

  const user = {
    _id: 1,
    name: 'test'
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
<<<<<<< HEAD

    process.nextTick(() => {
      expect(vm.loading).is.false
      expect(vm.$store.getters.isAuthenticated).is.true
      expect(vm.$store.getters.username).to.equals('test')
=======
    process.nextTick(() => {
      expect(vm.$auth.isAuthenticated).is.true
      expect(vm.$auth.user.name).to.equals(user.name)
>>>>>>> Refactor jwt auth
      done()
    })
  })
})
