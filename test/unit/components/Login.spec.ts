import Login from '@/components/Login.vue'
import { expect } from 'chai'
import { div } from '../utils'

describe('Login.vue', () => {
  it('login', done => {
    const vm = new Login({
      el: div,
      propsData: {
        active: true
      }
    })

    expect(vm.loading).is.false

    const $btnLogin = vm.$el.querySelector('button.button')
    $btnLogin.click()

    expect(vm.loading).is.true

    setTimeout(() => {
      expect(vm.loading).is.false
      done()
    }, 1000)
  })
})
