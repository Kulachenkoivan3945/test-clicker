<template>
  <Loader
    :resources="{
    spritesheet:  charactersList.miner.src,
    rock: 'src/assets/img/mines/miningOre1.png',
    coin: coinsPresets.gold.src
  }"
    @resolved="onResolved($event.spritesheet, $event.coin)"
  >
    <container
      cursor="pointer"
      @pointertap="onMinerClick"
    >
      <sprite
        :texture="'rock'"
        :anchor="0.5"
        :x="screen.width/2 + 40"
        :y="screen.height/1.5 +10"
        scale="0.3"
      >
        <blur-filter
          blur="2"
        />
      </sprite>
      <animated-sprite
        :textures="minerSprite.animation"
        playing
        :animation-speed="0.1"
        :anchor="0.5"
        :x="screen.width/2 - 30"
        :y="screen.height/1.5"
        :scale="5"
      />
      <animated-sprite
        v-for="coin in coins"
        :key="coin"
        ref="coin"
        :textures="coin.texture"
        :animation-speed="0.1"
        :anchor="0.5"
        :x="coin.x"
        :y="coin.y"
        :scale="coin.scale"
        :alpha="1 - coin.tickCount/MAX_COIN_TICK_COUNT"
        playing
      >
        <blur-filter
          blur="2"
        />
      </animated-sprite>
    </container>
  </Loader>
</template>


<script setup>
import { MiningAnimations } from '@/enums/animations';
import { storeToRefs } from 'pinia';
import { useMining } from '@/stores/useMining';
import { reactive, ref, watch } from 'vue';
import { Loader, onTick, useScreen } from 'vue3-pixi';
import { coinsPresets } from '@/utils/uiItemsAnimated';
import { charactersList } from '@/utils/characters/characters';

const { incrementGold } = useMining();
const { currentMinerAnimation } = storeToRefs(useMining());
const screen = useScreen();

const minerSprite = reactive({
  spritesheet: void 0,
  animation: void 0,
});

const coinSprite = ref({
  spritesheet: undefined,
  animation: undefined,
});

const onResolved = (sheet, coinSheet) => {
  minerSprite.spritesheet = sheet;
  minerSprite.animation = sheet.animations[currentMinerAnimation.value];
  coinSprite.value.spritesheet = coinSheet;
  coinSprite.value.animation = coinSheet.animations['coin-rotate'];
};

const coins = ref([]);
const MAX_COIN_TICK_COUNT = 60;

const onMinerClick = (event) => {
  currentMinerAnimation.value = MiningAnimations.MINING;
  const dxValue = (Math.random() * 20) + 10;
  coins.value.push({
    texture: coinSprite.value.animation,
    x: screen.value.width / 2 + 40,
    y: screen.value.height / 1.5 - 40,
    scale: (Math.random() * 1.5) + 1,
    anchor: 0.5,
    dx: Math.random() > 0.5 ? dxValue : -dxValue,
    dy: -((Math.random() * 40) + 30),
    tickCount: 0,
  });
  incrementGold();
};

onTick(() => {
  if (coins.value.length > 0) {
    coins.value = coins.value.filter(coin => coin.tickCount < MAX_COIN_TICK_COUNT);
    coins.value.forEach((coin) => {
      coin.x += coin.dx / 60;
      coin.y += coin.dy / 60;
      coin.tickCount++;
    });
  }
});

watch(coins, () => {
  console.log(coins.value.length);
  if (coins.value.length > 0) {
    currentMinerAnimation.value = MiningAnimations.MINING;
  } else {
    currentMinerAnimation.value = MiningAnimations.IDLE;
  }
  minerSprite.animation = minerSprite.spritesheet.animations[currentMinerAnimation.value];
});
</script>
