<template>
  <div class="video_wrapper">
    <video :src="videoSrc"></video>
  </div>
</template>

<script setup>
defineProps({
  videoSrc: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.video_wrapper {
  border: 1px solid red;
  box-shadow: 2px 2px 5px #acaaaa;
}
</style>
