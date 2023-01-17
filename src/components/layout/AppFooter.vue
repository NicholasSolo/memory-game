<template>
  <footer class="the-footer">
    <div class="contacts-block">
      <div class="left">
        <a :href="mainState.gameData.gameRulesLink.value" class="rules-link" target="_blank">
          Правила акции
        </a>
        <a :href="mainState.gameData.gamePolicyLink.value" class="rules-link" target="_blank">
          Политика обработки персональных данных
        </a>
        <p v-if="mainState.gameData.footerLegalInfo.value" class="client-info">
          {{ mainState.gameData.footerLegalInfo.value }}
        </p>
      </div>
      <div class="right">
        <p>Служба поддержки:</p>
        <a
          :href="`tel:${mainState.gameData.footerPhone.value}`"
          class="support-link phone"
          v-text="mainState.gameData.footerPhone.value"
        />
        <a
          :href="`mailto:${mainState.gameData.footerEmail.value}`"
          class="support-link"
          v-text="mainState.gameData.footerEmail.value"
        />
        <p class="ooc-copyright">&copy; Out Of Cloud. {{ currentYear }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { mainState } from '../../store/store';

const currentYear = computed(() => {
  const now = new Date();
  return now.getFullYear();
});
</script>

<style lang="scss" scoped>
.the-footer {
  display: flex;
  justify-content: space-between;
  padding: 49px 100px 46px 100px;
  background: #252937;
  color: #868ea5;

  a {
    color: #868ea5;
  }

  .contacts-block {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;

    .left {
      .rules-link {
        display: block;
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 140.88%;
        text-decoration-line: underline;
      }
      .client-info {
        max-width: 340px;
        margin-bottom: 15px;
        font-size: 16px;
        line-height: 18px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;

      p {
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 18px;
      }

      .support-link {
        font-size: 24px;
        line-height: 26px;

        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .the-footer {
    padding: 25px 61px 22px 57px;

    .contacts-block {
      flex-direction: column;
      margin: 0 0 20px 0;

      .left {
        margin-bottom: 15px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .the-footer {
    padding: 25px 25px 22px 25px;
  }
}
</style>
