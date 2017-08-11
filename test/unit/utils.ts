import Vue, { Component, PropOptions, ComponentOptions } from 'vue'

// for vue mount
export const el: Element = document.createElement('div')

// async-promise
export function nextTick(): Promise<any> {
  return new Promise(resolve => {
    process.nextTick(resolve)
  })
}

// create vue component
export function newVM(Comp: string | { new (args: Component): Vue }, propsData?: Object, components?: {[key: string]: Component}): Vue {
  return typeof Comp === 'string'
    ? newVMwithTemplate(Comp, propsData, components)
    : newVMwithComponent(Comp, propsData)
}

function newVMwithComponent(Comp: new (args: Component) => Vue, propsData?: Object): Vue {
  const options = {
    el, propsData
  } as ComponentOptions<Vue>

  return new Comp(options)
}

function newVMwithTemplate(template: string, propsData?: Object, components?: {[key: string]: Component}): Vue {
  let options = {
    el,
    data: () => propsData,
    template,
    components
  } as ComponentOptions<Vue>

  return new Vue(options)
}
