<template lang="html">
  <transition name="login" mode="out-in" v-if="isActive" appare>
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="is-loading" v-if="isLoading">
        Loading...
      </div>
      <login-form v-if="isLogin" @toggle="showRegist()"></login-form>
      <regist-form v-if="isRegist" @toggle="showLogin()"></regist-form>
    </div>
  </transition>
</template>

<script lang="ts">
import Login from './index.ts'
export default Login
</script>

<style lang="scss" scoped>
.login-enter-active,
.login-leave-active {
  transition: opacity .35s;
}

.login-enter,
.login-leave-to {
  opacity: 0;
}
</style>
