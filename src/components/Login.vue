<template lang="html">
  <transition name="login" mode="out-in" v-if="isActive" appare>
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div v-if="isLoading">
        Loading...
      </div>
      <login-form v-if="isLogin" @toggle="showRegist()"></login-form>
      <regist-form v-if="isRegist" @toggle="showLogin()"></regist-form>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { User } from '@/models'
import axios from 'axios'
import token from '@/bootstrap/token'

import LoginForm from './LoginForm.vue'
import RegistForm from './RegistForm.vue'

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
    const _token = token.get()
    if (_token) {
      axios.defaults.headers['Authorization'] = `Bearer ${_token}`
      axios.get('/me')
        .then(({data}) => {
          this.$store.dispatch('login', data.user)
        })
        .catch(() => {
          this.showLogin()
        })
    } else {
      this.showLogin()
    }
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
</script>

<style lang="scss" scoped>
.login-enter-active, .login-leave-active {
  transition: opacity .35s;
}
.login-enter, .login-leave-to {
  opacity: 0;
}
</style>
