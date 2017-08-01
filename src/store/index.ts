import { Store } from 'vuex'

const store = new Store({
  state: {
    authentication: false,
    user: null
  },
  getters: {
    isAuthenticated({authentication}) {
      return authentication
    },
    username({authentication, user}) {
      return authentication
        ? user.name
        : ''
    }
  },
  mutations: {
    setAuth(state, auth) {
      state.authentication = auth
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    login({commit}, user) {
      commit('setAuth', true)
      commit('setUser', user)
    },
    logout({commit}) {
      commit('setAuth', false)
      commit('setUser', null)
    }
  }
})

export default store
