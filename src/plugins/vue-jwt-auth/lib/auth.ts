import Vue from 'vue'
import Token from './token'
import axios from 'axios'
import { User } from '@/models'

namespace Auth {
  export interface Data extends Vue {
    user: User
    authenticated: boolean
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $auth: Auth
  }
}

export default class Auth {

  private _token: Token = null
  private watch: Auth.Data = null

  constructor(tokenName: string = 'jwt_token') {
    this._token = new Token(tokenName)

    if (this.token) {
      this.setAuthHeader(this.token)
    }

    this.watch = new Vue({
      data() {
        return {
          user: null,
          authenticated: false
        }
      }
    }) as Auth.Data
  }

  get isAuthenticated(): boolean {
    return this.watch.authenticated
  }

  get user(): User {
    return this.watch.user
  }

  get token(): string {
    return this._token.get()
  }

  setAuthHeader(token: string): void {
    this._token.set(token)
    axios.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  fetch(): Promise<any> {
    if (this.token) {
      return axios.get('/me')
        .then(({data}) => {
          this.loggedIn(data.user)
          return data
        })
    } else {
      return Promise.reject('has no token')
    }
  }

  login(user: User): Promise<any> {
    return axios.post('/auth/login', user)
      .then(({data}) => {
        this.setAuthHeader(data.token)
        this.loggedIn(data.user)

        return data
      })
  }

  regist(user: User): Promise<any> {
    return axios.post('/auth/regist', user)
  }

  loggedIn(user: User): void {
    this.watch.user = user
    this.watch.authenticated = true
  }

  logout(): void {
    this._token.remove()
    axios.defaults.headers['Authorization'] = null

    this.watch.user = null
    this.watch.authenticated = false
  }
}
