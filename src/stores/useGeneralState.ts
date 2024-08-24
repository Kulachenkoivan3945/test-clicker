import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { cardTabsValues } from '@/enums/tabs';

export const useGeneralState = defineStore(('generalState'), () => {

  const currentTab = ref(cardTabsValues.MINE);

  return {
    currentTab,
  };
}, {
  persist: true,
});
