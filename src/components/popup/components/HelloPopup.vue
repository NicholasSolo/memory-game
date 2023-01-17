<template>
  <div class="hello-popup">
    <h2 class="title" v-html="mainState.gameData.helloPopup.title.value" />

    <p
      class="text"
      v-if="mainState.gameData.helloPopup.subTitle.value"
      v-html="mainState.gameData.helloPopup.subTitle.value"
    />

    <p class="text">
      Время ограничено: нужно успеть за
      {{ mainState.gameData.timeMinutes.value }} {{ getNoun }}!
    </p>

    <app-button type="popup" @click-event="$emit('close')">Всё понятно!</app-button>
  </div>
</template>

<script setup>
import AppButton from '../../general/AppButton.vue';
import { mainState } from '../../../store/store';
import { computed } from 'vue';

const getNoun = computed(() => {
  return mainState.gameData.timeMinutes.value === 1
    ? 'минуту'
    : [2, 3, 4].includes(mainState.gameData.timeMinutes.value)
    ? 'минуты'
    : 'минут';
});
</script>

<style scoped lang="scss">
.hello-popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 76px 60px 90px 60px;

  .title {
    margin-bottom: 33px;
    font-size: 40px;
    line-height: 1;
    font-weight: 700;
    color: #e21a1a;
    text-align: center;
  }

  .text {
    max-width: 660px;
    margin-bottom: 42px;
    text-align: center;
  }
}

@media screen and (max-width: 1000px) {
  .hello-popup {
    padding: 36px 34px 60px 34px;

    .title {
      margin-bottom: 30px;
      font-size: 32px;
    }

    .text {
      margin-bottom: 40px;
    }

    :deep(.app-button) {
      width: 262px;
      padding: 15px 0;
    }
  }
}

@media screen and (max-width: 500px) {
  .hello-popup {
    padding: 35px 25px 40px 25px;

    .title {
      margin-bottom: 28px;
      font-size: 22px;
      line-height: 24px;
    }

    .text {
      margin-bottom: 38px;
    }

    :deep(.app-button) {
      width: 224px;
    }
  }
}
</style>
