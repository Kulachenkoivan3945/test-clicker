<template>
  <sprite
    v-for="cloud in clouds"
    :key="cloud"
    ref="cloud"
    :texture="cloud?.src"
    :anchor="0.5"
    :x="cloud?.x"
    :y="cloud?.y"
    :width="cloud?.width"
    :height="cloud?.height"
    :scale="cloud?.scale"
  >
    <blur-filter
      blur="1"
    />
  </sprite>
</template>

<script setup lang="ts">
import { resources } from '@/utils/resources';
import { onTick, useScreen } from 'vue3-pixi';
import { ref } from 'vue';

const screen = useScreen();
const clouds = ref([]);
const fillClouds = (() => {
  const cloudsCount = screen.value.width/150;
  for (let i = 0; i < cloudsCount; i++) {
    const width = (Math.round(Math.random() * 50) + 80);
    const y = 50 + (screen.value.height / (Math.random() * 100))
    clouds.value.push({
      src: resources[`cloud${Math.ceil(Math.random() * 3)}`],
      x: Math.random()* screen.value.width,
      y: y > screen.value.height/ 3 ? 50 : y,
      width: width,
      height: width * 0.5,
      dx: Math.ceil(Math.random()*50) + 20,
      dy: Math.random() > 0.5 ? - Math.random()*3 : Math.random()*3,
      tickCount: 0,
      scale: Math.random() + 1
    });
  }
})();

onTick((delta)=>{
  clouds.value.map(cloud=>{
    cloud.x += cloud.dx/60;
    cloud.y += cloud.dy/60;
    if(cloud.tickCount === 150){
      cloud.dy = cloud.dy > 0 ? - cloud.dy : cloud.dy
      cloud.tickCount = 0;
    }
    cloud.tickCount++;
    if(cloud.x >= screen.value.width + cloud.width){
      cloud.x = 0 - cloud.width;
    }
    return cloud
  })
})

</script>
