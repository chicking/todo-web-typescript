<template lang="html">
  <td v-if="isModifyMode">
    <input class="input" ref="input" type="text" :value="value" @keyup.enter="update($event.target.value)" @keyup.esc="close()" @blur="close()">
  </td>
  <td v-else class="clickable" @dblclick="showInput()">
    <slot></slot>
  </td>
</template>

<script lang="ts">
import TdInput from './index.ts'
export default TdInput
</script>

<style>
.clickable {
  cursor: pointer;
}
</style>
