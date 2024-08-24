<template>
  <img :src="overlayScene" class="overlay">
</template>
<script setup lang="ts">
import overlayScene from '@/assets/img/overlays/overlayScene.jpg'

</script>

<style scoped>
.overlay{
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
