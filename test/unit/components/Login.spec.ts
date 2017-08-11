import Login from '@/components/Login'
import { expect } from 'chai'
import { newVM, nextTick } from '../utils'

describe('Login.vue', () => {
  it('toggle', async () => {
    const vm = newVM(Login) as Login

    // status loading

    const loading = vm.$el.querySelector('.is-loading').textContent.trim()
    expect(loading).to.equals('Loading...')

    await vm.$nextTick() // update created()
    await nextTick() // $auth.fetch()
    await nextTick() // .catch()

    // status login

    expect(vm.isLogin, 'isLogin').is.true

    let title = vm.$el.querySelector('.modal-card-title').textContent.trim()
    expect(title).to.equals('Login')

    const $toggle = vm.$el.querySelector('.modal-card-header-icon') as HTMLButtonElement
    $toggle.click()

    // status regist

    expect(vm.isRegist, 'isRegist').is.true

    await vm.$nextTick() // update toggle()

    title = vm.$el.querySelector('.modal-card-title').textContent.trim()
    expect(title).to.equals('Regist')
  })
})
