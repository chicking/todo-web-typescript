<template lang="html">
  <td v-if="isModifyMode">
    <input class="input" ref="input" type="text" :value="value" @keyup.enter="update($event.target.value)" @keyup.esc="close()" @blur="close()">
  </td>
  <td v-else class="clickable" @dblclick="showInput()">
    <slot></slot>
  </td>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class TdInput extends Vue {

  // props

  @Prop() value: string

  // data

  isModifyMode: boolean = false

  // methods

  update(value: string) {
    this.$emit('input', value)
    this.$emit('change')
    this.close()
  }

  showInput() {
    this.isModifyMode = true
    this.$nextTick(() => {
      const $input = this.$refs.input as HTMLInputElement
      $input.focus()
    })
  }

  close() {
    this.isModifyMode = false
  }
}
</script>

<style>
.clickable {
  cursor: pointer;
}
</style>
