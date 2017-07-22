import App from '@/App.vue'
import { expect } from 'chai'
import { div } from './utils'

describe('App.vue', () => {
  it('should equal name', done => {
    const vm = new App({
      el: div
    })

    expect(vm.name).to.equals('World')

    const $firstDiv = vm.$el.querySelector('div:first-child')

    expect($firstDiv).to.not.be.null
    expect($firstDiv.textContent).to.equals('Hello World!')

    vm.name = 'Vue'
    vm.$nextTick(() => {
      expect($firstDiv.textContent).to.equals('Hello Vue!')
      done()
    })
  })
})