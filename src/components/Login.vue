<template lang="html">
  <transition name="login" mode="out-in" v-if="isActive" appare>
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="login modal-card" v-show="isLogin">
        <form @submit.prevent="login()">
          <header class="modal-card-head">
            <p class="modal-card-title">Login</p>
            <a class="modal-card-header-icon" @click="showRegist()">
              <span class="icon">
                <i class="fa fa-sign-in"></i>
              </span>
            </a>
          </header>
          <section class="modal-card-body">
            <div class="field">
              <div class="control has-icons-left">
                <input class="input" type="text" v-model="username" placeholder="Username">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input class="input" type="password" v-model="password" placeholder="Password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success" type="submit" :class="[loadingClass]">Login</button>
          </footer>
        </form>
      </div>
      <div class="regist modal-card" v-show="isRegist">
        <form @submit.prevent="regist()">
          <header class="modal-card-head">
            <p class="modal-card-title">Regist</p>
            <a class="modal-card-header-icon" @click="showLogin()">
              <span class="icon">
                <i class="fa fa-sign-in"></i>
              </span>
            </a>
          </header>
          <section class="modal-card-body">
            <div class="field">
              <div class="control has-icons-left">
                <input class="input" type="text" v-model="username" placeholder="Username">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input class="input" type="password" v-model="password" placeholder="Password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input class="input" type="password" v-model="passwordConfirmed" placeholder="Password confirmed">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success" type="submit" :class="[loadingClass]">Login</button>
          </footer>
        </form>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { User } from '@/models'
import axios from 'axios'

const STATUS_LOGIN = 'STATUS_LOGIN'
const STATUS_REGIST = 'STATUS_REGIST'

@Component
export default class LoginComponent extends Vue {

  @Prop() active: boolean

  // data

  username: string = ''
  password: string = ''
  passwordConfirmed: string = ''
  loading: boolean = false
  isActive: boolean = this.active
  status: string = STATUS_LOGIN

  // computed

  get loadingClass(): object {
    return {
      'is-loading': this.loading
    }
  }

  get isLogin(): boolean {
    return this.status === STATUS_LOGIN
  }

  get isRegist(): boolean {
    return this.status === STATUS_REGIST
  }

  get userInfo(): User {
    return {
      name: this.username,
      password: this.password
    }
  }

  // methods

  login(): void {
    if (!this.username || !this.password) {
      return
    }

    this.loading = true
    axios.post('/auth/login', this.userInfo)
      .then(({data}) => {
        console.log(data)
        this.loading = false
        this.$emit('update:active', false)
      })
      .catch(() => {
        this.loading = false
      })
  }

  regist(): void {
    if (this.password !== this.passwordConfirmed) {
      return
    }

    this.loading = true
    axios.post('/auth/regist', this.userInfo)
      .then(({data}) => {
        console.log(data)
        this.loading = false
        this.showLogin()
      })
      .catch(() => {
        this.loading = false
      })
  }

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
.modal .modal-card {
  max-width: 300px;
  border-radius: 5px;
}
</style>
