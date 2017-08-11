import { expect } from 'chai'
import { newVM, nextTick } from '../utils'
import faker from 'faker'

import TdInput from '@/components/TdInput.vue'

describe('TdInput.vue', () => {

  it('value prop', () => {
    const value = faker.lorem.sentence();
    const vm: TdInput = newVM(TdInput, {
      value
    })

    expect(vm.value).to.equals(value)
  })

  it('toggle', () => {
    const vm: TdInput = newVM(TdInput)

    expect(vm.isModifyMode).is.false

    vm.showInput()

    expect(vm.isModifyMode).is.true
  })
})
