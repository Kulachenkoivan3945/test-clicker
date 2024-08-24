<template>
  <v-card @click="incrementGold" class="rounded-xl bg-transparent h-100 w-100 card-bg" :ripple="false">
    <img
      :src="mine"
      class="w-100 h-100"
    />
  </v-card>
</template>

<script setup lang="ts">
import mine from '@/assets/img/mines/mine.png';
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
