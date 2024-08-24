import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCharacterState = defineStore(('characterState'), () => {

  const goldAmount = ref(0);
  const currentLevel = ref(1);
  const usedMiningCharacters = ref([]);
  const goldMultiplier = computed(() => {
    return 1;
  });
  const incrementGold = () => {
    goldAmount.value += 1;
  };

  return {
    goldAmount,
    currentLevel,
    incrementGold,
  };
}, {
  persist: true,
});
