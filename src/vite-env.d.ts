/// <reference types="vite/client" />
/// <reference types="vue-router/auto" />
/// <reference types="virtual:generated-layouts" />

declare module '*.vue' {
  import type {DefineComponent} from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
