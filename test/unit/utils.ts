import Vue, { Component, PropOptions } from 'vue'

// for vue mount
export const div: Element = document.createElement('div')

// async-promise
export function nextTick(): Promise<any> {
  return new Promise(resolve => {
    process.nextTick(resolve)
  })
}

// create vue component
export function newVM<T extends Vue>(_Vue: new (args: Component) => T, propsData?: PropOptions): T {
  return new _Vue({
    el: div,
    propsData
  })
}
