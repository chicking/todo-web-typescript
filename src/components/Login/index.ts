import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import LoginForm from '@/components/LoginForm'
import RegistForm from '@/components/RegistForm'

const STATUS_LOADING = 'STATUS_LOADING'
const STATUS_LOGIN = 'STATUS_LOGIN'
const STATUS_REGIST = 'STATUS_REGIST'

@Component({
  components: {
    LoginForm, RegistForm
  }
})
export default class LoginComponent extends Vue {

  // data

  isActive: boolean = true
  status: string = STATUS_LOADING

  // lifecycle

  created(): void {
    this.$auth.fetch()
      .catch(() => {
        this.showLogin()
      })
  }

  // computed

  get isLogin(): boolean {
    return this.status === STATUS_LOGIN
  }

  get isRegist(): boolean {
    return this.status === STATUS_REGIST
  }

  get isLoading(): boolean {
    return this.status === STATUS_LOADING
  }

  // methods

  showLogin(): void {
    this.status = STATUS_LOGIN
  }

  showRegist(): void {
    this.status = STATUS_REGIST
  }
}
