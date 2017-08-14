import Vue from 'vue'
import { Component, Prop } from '@gongzza/vue-property-decorator'

@Component
export default class TdInput extends Vue {

  // props

  @Prop value: string

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
