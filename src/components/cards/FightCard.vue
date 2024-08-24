<template>
  <v-card @click="incrementGold" class="h-100 w-100 card-bg" :ripple="false">
    <img
      :src="fightCard"
      class="w-100 h-100"
    />
  </v-card>
</template>

<script setup lang="ts">
import fightCard from '@/assets/img/overlays/fightScene.png';
import { useCharacterState } from '@/stores/useCharacterState';

const {incrementGold} = useCharacterState();
</script>
<style scoped>
.card-bg{
  border: none;
  background-color: transparent;
  box-shadow: none;
}
</style>
