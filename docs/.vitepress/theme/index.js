import DefaultTheme from "vitepress/theme"
import Concat from '../../../components/concat.vue'
import VideoComp from '../../../components/video.vue'
export default {
  ...DefaultTheme,
  enhanceApp({
    app
  }) {
    app.component('t-concat', Concat).component('t-video-comp', VideoComp)
  }
}