<template lang="html">
  <div class="regist modal-card">
    <form @submit.prevent="regist()">
      <header class="modal-card-head">
        <p class="modal-card-title">Regist</p>
        <a class="modal-card-header-icon" @click="$emit('toggle')">
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
        <button class="button is-success" type="submit" :class="[loadingClass]">Regist</button>
      </footer>
    </form>
  </div>
</template>

<script lang="ts">
import RegistForm from './index.ts'
export default RegistForm
</script>

<style lang="scss" scoped>
.modal-card {
  max-width: 300px;
  border-radius: 5px;
}
</style>
