<template lang="html">
  <transition name="login" mode="out-in" v-if="isActive" appare>
    <div class="modal is-active">
      <div class="modal-background"></div>
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

import LoginForm from './LoginForm.vue'
import RegistForm from './RegistForm.vue'

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
  status: string = STATUS_LOGIN

  // computed

  get isLogin(): boolean {
    return this.status === STATUS_LOGIN
  }

  get isRegist(): boolean {
    return this.status === STATUS_REGIST
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
