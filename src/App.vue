<template lang="html">
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Hello {{name}}!
        </h1>
        <h2 class="subtitle">
          Welcome to the TypeScript and Vue
        </h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  public name: string = 'World'
}
</script>
