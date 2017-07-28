import App from '@/App.vue'
import { expect } from 'chai'
import { div } from './utils'

describe('App.vue', () => {
  it('should equal name', done => {
    const vm = new App({
      el: div
    })

    expect(vm.name).to.equals('Todo')

    const $title = vm.$el.querySelector('h1.title')
    expect($title).is.not.null
    expect($title.textContent.trim()).to.equals('Hello Todo!')

    vm.name = 'Vue'
    vm.$nextTick(() => {
      expect($title.textContent.trim()).to.equals('Hello Vue!')
      done()
    })
  })

  it('open login', done => {
    const vm = new App({el: div})

    expect(vm.isLoginActive).is.false

    expect(vm.$el.querySelector('h1.title')).is.not.null

    const $btnLogin = vm.$el.querySelector('a.button')
    $btnLogin.click()

    expect(vm.isLoginActive).is.true

    vm.$nextTick(() => {
      expect(vm.$el.querySelector('h1.title')).is.null
      expect(vm.$el.querySelector('.login')).is.not.null
      done()
    })
  })
})
