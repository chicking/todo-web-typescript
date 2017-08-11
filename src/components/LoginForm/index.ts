import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class LoginFormComponent extends Vue {

  // data

  username: string = ''
  password: string = ''
  loading: boolean = false

  // computed

  get loadingClass(): object {
    return {
      'is-loading': this.loading
    }
  }

  // methods

  login(): void {
    if (!this.username || !this.password) {
      return
    }

    const userInfo = {
      name: this.username,
      password: this.password
    }

    this.loading = true
    this.$auth.login(userInfo)
      .catch(() => {
        this.loading = false
      })
  }
}
