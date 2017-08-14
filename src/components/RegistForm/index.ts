import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class RegistFormComponent extends Vue {

  // data

  username: string = ''
  password: string = ''
  passwordConfirmed: string = ''
  loading: boolean = false

  // computed

  get loadingClass(): object {
    return {
      'is-loading': this.loading
    }
  }

  // methods

  regist(): void {
    if (this.username === '' || this.password === '') {
      return
    }

    if (this.password !== this.passwordConfirmed) {
      return
    }

    const userInfo = {
      name: this.username,
      password: this.password
    }

    this.loading = true
    this.$auth.regist(userInfo)
      .then(() => {
        this.loading = false
        this.$emit('toggle')
      })
      .catch(() => {
        this.loading = false
      })
  }
}
