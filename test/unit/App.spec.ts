import App from '@/App.vue'
import { expect } from 'chai'

describe('App.vue', () => {
  it('should equal name', () => {
    const vm = new App({
      el: document.createElement('div')
    })

    expect(vm.name).to.equals('World')
  })
})
