<script setup>
import MiningCard from '@/components/cards/miningCard.vue';
import CloudsScene from '@/components/scenes/CloudsScene.vue';
import GoldStatus from '@/components/ui/GoldStatus.vue';
import { Loader, useScreen } from 'vue3-pixi';
import { resources } from '@/utils/resources';

const screen = useScreen();

</script>

<template>
  <Loader
    :resources="resources"
  >
    <template #fallback="{ progress }">
      <text :x="120" :y="120" :anchor="0.5">
        {{ `Loading... ${progress}` }}
      </text>
    </template>
    <sprite
      :texture="resources.mainBg"
      :anchor="0.5"
      :x="screen.width/2"
      :y="screen.height/2"
      :width="screen.width"
      :height="screen.height"
    />
    <clouds-scene/>
    <gold-status/>
    <mining-card/>
  </Loader>
</template>
