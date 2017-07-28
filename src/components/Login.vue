<template lang="html">
  <transition name="login" mode="out-in">
    <div class="modal is-active" v-if="isActive">
      <div class="modal-background"></div>
      <div class="login modal-card">
        <form @submit.prevent="login()">
          <header class="modal-card-head">
            <p class="modal-card-title">Login</p>
          </header>
          <section class="modal-card-body">
            <div class="field">
              <div class="control has-icons-left">
                <input class="input" type="text" placeholder="Username">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input class="input" type="password" placeholder="Password">
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

@Component
export default class LoginComponent extends Vue {

  @Prop() active: boolean

  // data

  username: string = ''
  password: string = ''
  loading: boolean = false
  isActive: boolean = this.active

  // computed

  get loadingClass(): object {
    return {
      'is-loading': this.loading
    }
  }

  // methods

  login(): void {
    this.loading = true
    setTimeout(() => {
      this.loading = false
      this.$emit('update:active', false)
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.login-enter-active, .login-leave-active {
  transition: opacify .5s;
}
.login-enter, .login-leave-to {
  opacity: 0;
}
.login.modal-card {
  max-width: 300px;
  border-radius: 5px;
}
</style>
