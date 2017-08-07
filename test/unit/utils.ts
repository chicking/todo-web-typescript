
// for vue mount
export const div: Element = document.createElement('div')

// async-promise
export function nextTick(): Promise<any> {
  return new Promise(resolve => {
    process.nextTick(resolve)
  })
}
