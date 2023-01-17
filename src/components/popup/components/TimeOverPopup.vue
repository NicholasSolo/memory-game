<template>
  <div class="time-over-popup">
    <h4 class="title">
      Время истекло, <br />
      попробуйте еще раз!
    </h4>
    <app-button type="popup" @click-event="repeatGame">Играть!</app-button>
  </div>
</template>

<script setup>
import AppButton from '../../general/AppButton.vue';
import { mainState } from '../../../store/store';

const emit = defineEmits(['close']);

const repeatGame = () => {
  emit('close');
};
</script>

<style scoped lang="scss">
.time-over-popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 60px 70px 60px;
  background-repeat: no-repeat;
  background-position: right 25px;

  .title {
    max-width: 530px;
    margin-bottom: 65px;
    font-size: 50px;
    line-height: 1;
    font-weight: 700;
    text-align: center;
    color: #e21a1a;
  }

  :deep(.app-button) {
    width: 249px;
    height: 60px;
  }
}
@media screen and (max-width: 1000px) {
  .time-over-popup {
    padding: 42px 34px 50px 34px;
    background-position: 90px 185px;

    .title {
      max-width: 350px;
      margin-bottom: 33px;
      font-size: 32px;
    }

    :deep(.app-button) {
      width: 205px;
      height: 50px;
      padding: 17px 0;
    }
  }
}

@media screen and (max-width: 500px) {
  .time-over-popup {
    padding: 25px 30px 40px 30px;
    background-position: 0 225px;

    .title {
      max-width: 230px;
      margin-bottom: 31px;
      font-size: 26px;
    }

    :deep(.app-button) {
      width: 160px;
      height: 45px;
      padding: 15px 0;
    }
  }
}
</style>
