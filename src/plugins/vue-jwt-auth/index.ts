import Vue, { PluginObject } from 'vue'
import Auth from './lib/auth'

namespace VueJwtAuth {
  export type PluginOptions = {
    tokenName?: string
  }
}

export default {
  install(Vue, {tokenName = 'jwt_token'} = {}): void {
    const auth = new Auth(tokenName)

    Object.defineProperties(Vue.prototype, {
      $auth: {
        get() {
          return auth
        }
      }
    })
  }
} as PluginObject<VueJwtAuth.PluginOptions>
