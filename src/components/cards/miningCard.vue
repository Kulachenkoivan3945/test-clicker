<script setup>
import { reactive } from 'vue';
import { Loader, useScreen } from 'vue3-pixi';

const screen = useScreen();
const resource = reactive({
  spritesheet: void 0,
  animation: void 0,
});

function onResolved(sheet) {
  resource.spritesheet = sheet;
  resource.animation = sheet.animations['idle'];
}

function onChangeAnimation() {
  const keys = Object.keys(resource.spritesheet.animations);
  const randomIndex = Math.floor(Math.random() * keys.length);
  resource.animation = resource.spritesheet.animations[keys[randomIndex]];
}

</script>

<template>
  <Loader
    :resources="{ spritesheet:  'src/assets/spritesheets/dwarf/dwarf.json'}"
    @resolved="onResolved($event.spritesheet)"
  >
    <animated-sprite
      :textures="resource.animation"
      playing
      :animation-speed="0.1"
      :anchor="0.5"
      :x="screen.width/2 - 30"
      :y="screen.height/1.5"
      :scale="5"
      @loop="onChangeAnimation"
    />
    <sprite
      :texture="'src/assets/img/mines/miningOre1.png' "
      :anchor="0.5"
      :x="screen.width/2 + 40"
      :y="screen.height/1.5 +10"
      scale="0.3"
    >
      <blur-filter
        blur="2"
      />
    </sprite>
  </Loader>
</template>
