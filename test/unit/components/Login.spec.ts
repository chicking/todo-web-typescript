import Login from '@/components/Login.vue'
import { expect } from 'chai'
import { div } from '../utils'

describe('Login.vue', () => {
  it('toggle', done => {
    const vm = new Login({
      el: div
    })

    // status loading

    const loading = vm.$el.querySelector('.is-loading').textContent.trim()
    expect(loading).to.equals('Loading...')

    setTimeout(() => {

      // status login

      expect(vm.isLogin, 'isLogin').is.true

      let title = vm.$el.querySelector('.modal-card-title').textContent.trim()
      expect(title).to.equals('Login')

      const $toggle = vm.$el.querySelector('.modal-card-header-icon')
      $toggle.click()

      // status regist

      expect(vm.isRegist).is.true
      vm.$nextTick(() => {
        title = vm.$el.querySelector('.modal-card-title').textContent.trim()
        expect(title).to.equals('Regist')
        done()
      })
    }, 10)
  })
})
