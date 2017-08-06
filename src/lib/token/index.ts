
/**
 * Token management by localStorage
 */
export default class Token {
  constructor(public name: string = 'token') {}

  get(): string {
    return localStorage.getItem(this.name)
  }

  set(token: string): void {
    localStorage.setItem(this.name, token)
  }

  remove(): void {
    localStorage.removeItem(this.name)
  }
}
