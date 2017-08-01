import Login from '@/components/Login.vue'
import { expect } from 'chai'
import { div } from '../utils'

describe('Login.vue', () => {
  it('toggle', done => {
    const vm = new Login({
      el: div
    })

    const $toggle = vm.$el.querySelector('.modal-card-header-icon')

    expect(vm.isLogin).is.true
    let title = vm.$el.querySelector('.modal-card-title').textContent.trim()
    expect(title).to.equals('Login')

    $toggle.click()

    expect(vm.isRegist).is.true
    vm.$nextTick(() => {
      title = vm.$el.querySelector('.modal-card-title').textContent.trim()
      expect(title).to.equals('Regist')
      done()
    })
  })
})
