import RegistForm from '@/components/RegistForm'
import { expect } from 'chai'
import { newVM, nextTick } from '../utils'
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

  it('regist', async () => {
    const vm = newVM(RegistForm) as RegistForm

    expect(vm.loading).is.false

    vm.username = 'username'
    vm.password = 'password'
    vm.passwordConfirmed = 'password'

    const $btnLogin = vm.$el.querySelector('button.button') as HTMLButtonElement
    $btnLogin.click()

    expect(vm.loading).is.true

    await nextTick() // $auth.regist()

    expect(vm.loading).is.false
  })

  it('regist#not equal to password', () => {
    const vm = newVM(RegistForm) as RegistForm

    expect(vm.loading).is.false

    vm.username = 'username'
    vm.password = 'password'
    vm.passwordConfirmed = 'not equal'

    const $btnLogin = vm.$el.querySelector('button.button') as HTMLButtonElement
    $btnLogin.click()

    // Nothing to do

    expect(vm.loading).is.false
  })
})
