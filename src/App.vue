<script setup>
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';
import MainBlock from './components/MainBlock.vue';
import ThePopup from './components/popup/ThePopup.vue';

import { time } from './composables/timer';
import { mainState, mainMethods } from './store/store.js';

// SET GLOBAL DATA
mainMethods.setState(window.state);
time.minutes = mainState.gameData.timeMinutes.value;
time.seconds = mainState.gameData.timeSeconds.value;
// SET GLOBAL DATA END
</script>

<template>
  <div :class="['container']">
    <app-header />
    <main class="main app-container">
      <main-block />
    </main>
    <app-footer />

    <the-popup v-if="mainState.popupName" />
  </div>
</template>
