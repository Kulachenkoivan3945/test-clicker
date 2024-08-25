<script setup>
import AnimationCard from '@/components/cards/AnimationCard.vue';
import MiningCard from '@/components/cards/miningCard.vue';
import { reactive } from 'vue';
import { Loader, useScreen } from 'vue3-pixi';

const screen = useScreen();
const resources = {
  tree1: 'src/assets/img/mainScene/trees/tree1.png',
  tree2: 'src/assets/img/mainScene/trees/tree2.png',
  cloud1: 'src/assets/img/mainScene/clouds/cloud1.png',
  cloud2: 'src/assets/img/mainScene/clouds/cloud2.png',
  cloud3: 'src/assets/img/mainScene/clouds/cloud3.png',
  mainBg: 'src/assets/img/mainScene/bg-1.webp',
};

const clouds = [];
const fillClouds = (() => {
  const treesCount = (Math.random() * 15) + 15;
  for (let i = 0; i < treesCount; i++) {
    const width = (Math.round(Math.random() * 50) + 80);
    const xMul = (Math.random() * 100);
    const y = (screen.value.height / (Math.random() * 100)) + 50;
    const src = resources[`cloud${Math.ceil(Math.random() * 3)}`];
    console.log(src);
    console.log(xMul);
    clouds.push({
      src,
      xMul,
      y,
      width: width,
      height: width * 0.5,

    });
  }
})();

const trees = [];
const fillTrees = (() => {
  const treesCount = (Math.random() * 15) + 15;
  console.log(treesCount);
  for (let i = 0; i < treesCount; i++) {
    const width = (Math.round(Math.random() * 50) + 80);
    const xMul = (Math.random() * 100);
    const yMul = (Math.random() + 1);
    const src = resources[`tree${Math.ceil(Math.random() * 2)}`];
    console.log(src);
    console.log(xMul);
    trees.push({
      src,
      xMul,
      yMul,
      width: width,
      height: width * 1.4,

    });
  }
})();

console.log(trees);
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
<!--    <sprite
      v-for="tree in trees"
      :key="tree"
      :texture="tree.src"
      :anchor="0.5"
      :x="Math.random()* screen.width"
      :y="(screen.height/ tree.yMul) - 50"
      :width="tree.width"
      :height="tree.height"
    >
      <blur-filter
        blur="1"
      />
    </sprite>-->
    <sprite
      v-for="cloud in clouds"
      :key="cloud"
      :texture="cloud.src"
      :anchor="0.5"
      :x="Math.random()* screen.width"
      :y="cloud.y"
      :width="cloud.width"
      :height="cloud.height"
    >
      <blur-filter
        blur="1"
      />
    </sprite>
    <mining-card/>
    <!--    <animation-card/>-->
    <!--    :scale="screen.width > screen.height ? screen.width / screen.height : screen.height / screen.width"-->
  </Loader>
</template>
