// 添加组件类型声明
import LnSwiper from './LnSwiper.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LnSwiper: typeof LnSwiper
    // XtxGuess: typeof XtxGuess
  }
}
