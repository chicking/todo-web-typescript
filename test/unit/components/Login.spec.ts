import Login from '@/components/Login.vue'
import { expect } from 'chai'
import { div, nextTick } from '../utils'

describe('Login.vue', () => {
  it('toggle', async () => {
    const vm = new Login({
      el: div
    })

    // status loading

    const loading = vm.$el.querySelector('.is-loading').textContent.trim()
    expect(loading).to.equals('Loading...')

    await vm.$nextTick()
    await nextTick()

    // status login

    expect(vm.isLogin, 'isLogin').is.true

    let title = vm.$el.querySelector('.modal-card-title').textContent.trim()
    expect(title).to.equals('Login')

    const $toggle = vm.$el.querySelector('.modal-card-header-icon')
    $toggle.click()

    // status regist

    expect(vm.isRegist, 'isRegist').is.true

    await vm.$nextTick()

    title = vm.$el.querySelector('.modal-card-title').textContent.trim()
    expect(title).to.equals('Regist')
  })
})
