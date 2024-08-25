<template>
  <Loader
    :resources="{
    coin: coinsPresets.gold.src,
    bg: 'src/assets/img/ui/title-bg.png',
    Crosterian: CrosterianFont,
  }"
    @resolved="onResolved($event.coin)"
  >
    <sprite
      :texture="'src/assets/img/ui/title-bg.png'"
      :x="screen.width/2"
      :y="50"
      :height="80"
      :width="250"
      :anchor="0.5"
    />
    <text
      :x="screen.width/2"
      :y="46"
      :anchor="0.5"
      :text="goldAmount"
      :style="{
      fill: ['black'],
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Crosterian'
      }"
    >
    </text>
    <animated-sprite
      :textures="coinSprite.animation"
      :animation-speed="0.1"
      :anchor="0.5"
      :x="screen.width/2 - 80"
      :y="50"
      :scale="2"
      playing
    >
      <blur-filter
        blur="2"
      />
    </animated-sprite>
  </Loader>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCharacterState } from '@/stores/useCharacterState';
import { useScreen, Loader } from 'vue3-pixi';
import { ref } from 'vue';
import { coinsPresets } from '@/utils/uiItemsAnimated';
import { CrosterianFont } from '@/utils/ui';

const { goldAmount } = storeToRefs(useCharacterState());
const screen = useScreen();

const coinSprite = ref({
  spritesheet: undefined,
  animation: undefined,
});

const onResolved = (coinSheet) => {
  console.log(coinSheet);
  coinSprite.value.spritesheet = coinSheet;
  coinSprite.value.animation = coinSheet.animations['coin-rotate'];
};
</script>
