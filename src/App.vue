<template lang="html">
  <div>
    <div>Hello {{name}}!</div>
    Name: <input v-model="name" type="text">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  public name: string = 'World'
}
</script>
