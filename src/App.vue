<template class="app-container">
  <v-container class="app-container d-flex flex-column align-center">
    <OverlayScene/>
<!--    <ClickerTabs class="d-flex align-center clickers-tabs"/>-->
  </v-container>
</template>
<script setup>
import OverlayScene from '@/components/OverlayScene.vue';
import ClickerTabs from '@/components/ClickerTabs.vue';
</script>

<style scoped>
.app-container{
  max-width: 100vw;
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}


:deep(.v-slide-group__content){
  justify-content: center;
}

</style>
