import App from '@/App.vue'
import store from '@/store'
import { expect } from 'chai'
import { div } from './utils'

describe('App.vue', () => {
  it('$store#login', () => {
    const vm = new App({
      el: div,
      store
    })

    expect(vm.isAuthenticated).is.false
    expect(vm.username).to.empty

    const user = {
      name: 'test'
    }
    vm.$store.dispatch('login', user)

    expect(vm.isAuthenticated).is.true
    expect(vm.username).to.equals(user.name)
  })

  it('$store#logout', () => {
    const vm = new App({
      el: div,
      store
    })

    vm.$store.dispatch('logout')

    expect(vm.isAuthenticated).is.false
    expect(vm.username).to.empty
  })
})
