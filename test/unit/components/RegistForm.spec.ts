import RegistForm from '@/components/RegistForm.vue'
import { expect } from 'chai'
import { div } from '../utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)
mock
  .onPost('/todo/api/auth/regist')
    .reply(201, {
      success: true
    })

describe('RegistForm.vue', () => {
  it('regist', () => {
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
  })
})
