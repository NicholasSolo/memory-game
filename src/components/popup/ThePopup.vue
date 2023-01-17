<template>
  <div class="the-popup">
    <div class="content">
      <button class="close" @click="close" />

      <hello-popup v-if="mainState.popupName === 'HelloPopup'" @close="close" />
      <email-popup v-if="mainState.popupName === 'EmailPopup'" />
      <final-popup v-if="mainState.popupName === 'FinalPopup'" @close="close" />
      <time-over-popup v-if="mainState.popupName === 'TimeOverPopup'" @close="close" />
    </div>
  </div>
</template>

<script setup>
import { mainState, mainMethods } from '../../store/store';
import HelloPopup from './components/HelloPopup.vue';
import FinalPopup from './components/FinalPopup.vue';
import EmailPopup from './components/EmailPopup.vue';
import TimeOverPopup from './components/TimeOverPopup.vue';

const close = () => {
  document.body.style.overflowY = 'scroll';
  mainMethods.setPopupName('');
};
</script>

<style scoped lang="scss">
.the-popup {
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);

  .content {
    position: absolute;
    min-width: 320px;
    width: 860px;
    font-size: 20px;
    line-height: 28px;
    color: #2d2d2d;
    background-color: #fff3eb;

    .close {
      z-index: 2;
      position: absolute;
      right: 30px;
      top: 30px;
      width: 24px;
      height: 24px;
      background-image: url('img/close.svg');
      background-position: center;
      background-repeat: no-repeat;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .the-popup {
    .content {
      width: 480px;
      font-size: 16px;
      line-height: 19px;

      .close {
        top: 15px;
        right: 15px;
        width: 18px;
        height: 18px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .the-popup {
    .content {
      width: 320px;
      font-size: 14px;
      line-height: 16px;

      .close {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
