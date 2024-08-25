<template>
  <Application :width="sizes.width" :height="sizes.height" :background-alpha="0" class="overlay">
    <MainScene/>
  </Application>
</template>

<script setup lang="ts">
import { Application } from 'vue3-pixi';
import MainScene from '@/components/scenes/MainScene.vue';
import { useDisplay } from 'vuetify';
import { computed, ref, watch } from 'vue';

const { width, height } = useDisplay();

const sizes = ref({
  width: window.innerWidth,
  height: window.innerHeight,
});

const getSizes = () => {
  sizes.value = {
    width: document.getElementById('app').clientWidth,
    height: height.value + 1,
  };
};

watch([width, height], () => {
  console.log('asd');
  getSizes();
});
</script>

<style scoped>
.overlay{
  z-index: -1;
  position: absolute;
  top:0;
  left: 0;

}
</style>
