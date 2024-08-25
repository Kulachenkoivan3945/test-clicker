import { defineStore, storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { MiningAnimations } from '@/enums/animations';
import { useCharacterState } from '@/stores/useCharacterState';

export const useMining = defineStore(('miningState'), () => {

    const { goldAmount } = storeToRefs(useCharacterState());
    const currentMinerAnimation = ref(MiningAnimations.IDLE);
    const incrementGold = () => {
      goldAmount.value += 1;
    };
    return {
      incrementGold,
      currentMinerAnimation,
    };
  },
);
