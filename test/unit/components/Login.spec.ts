import Login from '@/components/Login.vue'
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
  .onPost('/todo/api/auth/regist')
    .reply(201, {
      success: true
    })


describe('Login.vue', () => {
  it('login', () => {
    const vm = new Login({
      el: div,
      propsData: {
        active: true
      }
    })

    expect(vm.loading).is.false

    vm.username = 'username'
    vm.password = 'password'

    const $btnLogin = vm.$el.querySelector('button.button')
    $btnLogin.click()

    expect(vm.loading).is.true
  })

  it('regist', () => {
    const vm = new Login({
      el: div,
      propsData: {
        active: true
      }
    })

    expect(vm.loading).is.false

    vm.username = 'username'
    vm.password = 'password'
    vm.passwordConfirmed = 'password'

    const $btnLogin = vm.$el.querySelector('button.button')
    $btnLogin.click()

    expect(vm.loading).is.true
  })
})
