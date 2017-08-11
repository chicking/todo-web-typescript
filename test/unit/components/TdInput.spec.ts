import { expect } from 'chai'
import { newVM, nextTick } from '../utils'
import faker from 'faker'

import TdInput from '@/components/TdInput'

describe('TdInput.vue', () => {

  it('slot', () => {
    const value = faker.lorem.sentence();
    const vm = newVM(
      `<td-input :value="value">{{value}}</td-input>`,
      {value},
      {TdInput}) as TdInput

    expect(vm.$el.textContent.trim()).to.equals(value)
  })

  it('props#value', () => {
    const value = faker.lorem.sentence();
    const vm = newVM(TdInput, {value}) as TdInput

    expect(vm.value).to.equals(value)
  })

  it('showInput', () => {
    const vm = newVM(TdInput) as TdInput

    expect(vm.isModifyMode).is.false

    vm.showInput()

    expect(vm.isModifyMode).is.true
  })
})
