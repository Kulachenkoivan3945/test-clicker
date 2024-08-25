import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCharacterState = defineStore(('characterState'), () => {

  const goldAmount = ref(0);
  const currentLevel = ref(1);

  return {
    goldAmount,
    currentLevel,
  };
}, {
  persist: true,
});
