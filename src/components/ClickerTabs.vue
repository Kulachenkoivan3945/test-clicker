<template>
  <v-row class="flex-column align-center ma-0 flex-grow-0 tabs-container pa-4 position-relative" no-gutters>
    <CardsOverlay/>
    <v-col class="pa-0 flex-grow-0">
      <v-tabs-window v-model="currentTab" class="cards-container">
        <v-tabs-window-item :value="cardTabsValues.MINE" class="card-window w-50">
          <MineCard/>
        </v-tabs-window-item>
        <v-tabs-window-item :value="cardTabsValues.FIGHT" class="card-window">
          <FightCard/>
        </v-tabs-window-item>
        <v-tabs-window-item :value="cardTabsValues.CRAFT" class="card-window w-50">
          <CraftCard/>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-col>
    <v-col class="flex-grow-0 pb-4 text-white">
      <v-tabs
        v-model="currentTab"
      >
        <v-tab :value="cardTabsValues.MINE">Шахта</v-tab>
        <v-tab :value="cardTabsValues.FIGHT">Рейд</v-tab>
        <v-tab :value="cardTabsValues.CRAFT">Крафт</v-tab>
      </v-tabs>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { cardTabsValues } from '@/enums/tabs';
import { storeToRefs } from 'pinia';
import { useGeneralState } from '@/stores/useGeneralState';
import MineCard from '@/components/cards/MineCard.vue';
import FightCard from '@/components/cards/FightCard.vue';
import CraftCard from '@/components/cards/CraftCard.vue';
import CardsOverlay from '@/components/overlays/CardsOverlay.vue';

const { currentTab } = storeToRefs(useGeneralState());
</script>
<style scoped>
.tabs-container {
  backdrop-filter: blur(3px);
}

.cards-container {
  width: 30vw;
  height: 75vh;
  min-width: 300px;
  min-height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.card-window {
  min-width: 200px;
  min-height: 200px;
  height: 70%;
  width: 70%;
}

:deep(.v-window__container) {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
}
</style>
