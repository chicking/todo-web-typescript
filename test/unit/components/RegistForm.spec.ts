import RegistForm from '@/components/RegistForm.vue'
import { expect } from 'chai'
import { div } from '../utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('RegistForm.vue', () => {
  before(() => {
    const mock = new MockAdapter(axios)
    mock.onPost('/auth/regist')
      .reply(201, {
        success: true
      })
  })

  it('regist', done => {
    const vm = new RegistForm({
      el: div
    })

    expect(vm.loading).is.false

    vm.username = 'username'
    vm.password = 'password'
    vm.passwordConfirmed = 'password'

    const $btnLogin = vm.$el.querySelector('button.button')
    $btnLogin.click()

    expect(vm.loading).is.true

    process.nextTick(() => {
      expect(vm.loading).is.false
      done()
    })
  })

  it('regist#not equal to password', () => {
    const vm = new RegistForm({
      el: div
    })

    expect(vm.loading).is.false

    vm.username = 'username'
    vm.password = 'password'
    vm.passwordConfirmed = 'not equal'

    const $btnLogin = vm.$el.querySelector('button.button')
    $btnLogin.click()

    expect(vm.loading).is.false
  })
})
