<template>
  <img :src="CardsBorder" class="overlay">
</template>
<script setup lang="ts">
import CardsBorder from '@/assets/img/cards/cardBorder.png'

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
  object-fit: fill;
}
</style>
