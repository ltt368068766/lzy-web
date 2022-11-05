import DefaultTheme from "vitepress/theme"
import Concat from '../../../components/concat.vue'
import VideoComp from '../../../components/video.vue'
import EndTime from '../../../components/EndTime.vue'
import GlobalComp from '../../../components/GlobalComp.vue'
export default {
  ...DefaultTheme,
  enhanceApp({
    app
  }) {
    app.component('t-concat', Concat).component('t-video-comp', VideoComp).component('EndTime', EndTime).component('GlobalComp', GlobalComp)
  }
}