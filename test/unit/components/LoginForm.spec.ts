import LoginForm from '@/components/LoginForm.vue'
import { expect } from 'chai'
import { newVM, nextTick } from '../utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import * as faker from 'faker'

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

  it('login', async () => {
    const vm = newVM(LoginForm) as LoginForm

    expect(vm.loading).is.false

    vm.username = 'username'
    vm.password = 'password'

    const $btnLogin = vm.$el.querySelector('button.button') as HTMLButtonElement
    $btnLogin.click()

    expect(vm.loading).is.true

    await nextTick() // $auth.login()

    expect(vm.$auth.isAuthenticated).is.true
    expect(vm.$auth.user.name).to.equals(user.name)
  })
})
