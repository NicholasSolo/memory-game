<template>
  <div :class="['final-popup', { '_already-played': mainState.isUserOld }]">
    <h2 class="title" v-html="getTitle" />
    <p class="subtitle" v-html="getSubTitle" />

    <div class="content">
      <app-button type="popup" @click-event="restartGame"> Играть еще! </app-button>
    </div>

    <div v-if="!mainState.isUserOld" class="spam">
      Не&nbsp;нашли письмо? Проверьте папку&nbsp;&laquo;Спам&raquo;.
    </div>
  </div>
</template>

<script setup>
import AppButton from '../../general/AppButton.vue';
import { mainState } from '../../../store/store.js';
import { computed } from 'vue';
const emit = defineEmits(['close']);

const getTitle = computed(() => {
  return mainState.isUserOld ? 'Вы уже играли!' : 'Мы отправили письмо на&nbsp;вашу почту!';
});

const getSubTitle = computed(() => {
  return mainState.isUserOld
    ? 'Письмо с&nbsp;подарком ждет вас на&nbsp;почте.'
    : 'Не&nbsp;забудьте подтвердить почту, чтобы получить подарок!';
});

const restartGame = () => {
  emit('close');
};
</script>

<style scoped lang="scss">
.final-popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 48px 60px 50px 60px;

  .title {
    max-width: 540px;
    margin-bottom: 15px;
    font-size: 50px;
    line-height: 1;
    font-weight: 700;
    text-align: center;
    color: #e21a1a;
  }

  .subtitle {
    max-width: 400px;
    margin-bottom: 17px;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
  }

  .content {
    font-size: 20px;
    line-height: 20px;

    :deep(.app-button) {
      width: 290px;
      margin-bottom: 70px;
    }
  }

  .spam {
    font-weight: 700;
    text-align: center;
  }

  &._already-played {
    padding: 40px 80px;

    .title {
      margin-bottom: 27px;
    }

    .subtitle {
      margin-bottom: 20px;
    }

    .content {
      :deep(.app-button) {
        margin-bottom: 0;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .final-popup {
    padding: 27px 22px 19px 34px;

    .title {
      max-width: 330px;
      margin-bottom: 13px;
      font-size: 32px;
    }

    .subtitle {
      max-width: 100%;
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 16px;
    }

    .content {
      font-size: 14px;
      line-height: 16px;

      :deep(.app-button) {
        width: 240px;
        margin-bottom: 30px;
        padding: 15px 0;
      }
    }

    .spam {
      font-size: 14px;
    }

    &._already-played {
      padding: 27px 26px 22px 34px;

      .title {
        margin-bottom: 13px;
      }
      .subtitle {
        margin-bottom: 48px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .final-popup {
    padding: 15px 30px 16px 30px;

    .title {
      max-width: 250px;
      margin-bottom: 10px;
      font-size: 24px;
    }

    .subtitle {
      margin-bottom: 7px;
      font-size: 13px;
      line-height: 15px;
    }

    .content {
      font-size: 13px;
      line-height: 15px;

      :deep(.app-button) {
        width: 186px;
        margin-bottom: 23px;
      }
    }

    .spam {
      font-size: 13px;
      line-height: 15px;
    }

    &._already-played {
      padding: 15px 15px 45px 30px;

      .title {
        margin-bottom: 10px;
      }

      .subtitle {
        margin-bottom: 37px;
      }
    }
  }
}
</style>
