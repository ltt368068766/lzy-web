<template>
  <div class="line" :style="{
    color: isRandomColor ? randomBackground : 'var(--vp-c-divider-light)'
  }" :class="{ 'line1': type !== 1 }">
    <div class="params-item">
      <span v-if="type === 1">更新时间: {{ time }}</span>
      <span v-else>{{ globalTitle }}</span>
      <span>{{ mood }}</span>
    </div>

    <slot name="end" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, defineProps } from 'vue';
import axios from 'axios'
const props = defineProps({
  time: {
    type: String,
    default: ''
  },
  mood: {
    type: String
  },
  isRandomColor: {
    type: Boolean,
    default: true
  },
  type: {
    type: Number,
    default: 1
  },
  createTime: {
    type: String,
    default: new Date().toLocaleDateString().split('/').join('-') + '/' + new Date().toLocaleTimeString()
  }
})

const colors = [
  'var(--vp-custom-block-danger-text)',
  'var(--vp-custom-block-tip-text)',
]
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomBackground = computed(() => colors[random(0, 2)])

const globalTitle = ref('')
// 获取文章
function getArticle() {
  return new Promise((resolve, reject) => {
    axios.get('https://v1.hitokoto.cn').then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

if (props.type != 1) {
  getArticle().then((res: any) => {
    globalTitle.value = res.hitokoto
    console.log('globalTitle :>> ', globalTitle);
  })
}

</script>

<style scoped>
.line {
  width: 100%;
  line-height: 20px;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 18px;
  color: var(--vp-custom-block-tip-text);
  font-weight: bolder;
}

.line::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 6px;
  height: 100%;
  background-color: var(--vp-c-divider-light);
}

.params-item {
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 12px;
}

.line1 {
  margin-bottom: 24px;
}

.params-item span:not(:first-child) {
  font-size: 14px;
  margin-left: 12px;
}
</style>
