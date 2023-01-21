<template>
  <div class="main-block">
    <h4 class="title" v-html="mainState.gameData.header.value" />
    <p v-if="!mainState.isGameActive" class="text" v-html="mainState.gameData.description.value" />

    <game />

    <a :href="mainState.gameData.gameRulesLink.value" class="rules" target="_blank"
      >Участвуя в данной игре, вы соглашаетесь с ее правилами
    </a>
  </div>
</template>

<script setup>
import { mainState } from '../store/store';
import Game from './Game.vue';
</script>

<style scoped lang="scss">
.main-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;
  color: #2d2d2d;

  .title {
    position: relative;
    margin-bottom: 12px;
    font-size: 50px;
    line-height: 1;
    font-weight: 700;
    text-align: center;
    color: #e21a1a;
  }

  .text {
    max-width: 570px;
    margin-bottom: 36px;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }

  .rules {
    font-size: 14px;
    line-height: 16px;
    color: #94877f;
    text-decoration: underline;
    text-align: center;
  }
}

@media screen and (max-width: 1200px) {
  .main-block {
    margin-bottom: 105px;

    .title {
      margin-bottom: 10px;
      font-size: 40px;
    }
  }
}

@media screen and (max-width: 960px) {
  .main-block {
    margin-bottom: 90px;

    .title {
      margin-bottom: 11px;
      font-size: 36px;
      text-align: center;
    }

    .text {
      font-size: 16px;
      line-height: 20px;
    }

    .rules {
      font-size: 12px;
      line-height: 14px;
    }
  }
}

@media screen and (max-width: 800px) {
  .main-block {
    margin-bottom: 50px;

    .title {
      margin-bottom: 6px;
      font-size: 32px;
      @media screen and (max-width: 740px) {
        max-width: 290px;
      }
    }

    .text {
      margin-bottom: 47px;
      font-size: 14px;
      line-height: 16px;
    }
  }
}

@media screen and (max-width: 500px) {
  .main-block {
    margin-bottom: 39px;

    .title {
      margin-bottom: 10px;
      font-size: 26px;
    }

    .text {
      max-width: 300px;
      margin-bottom: 50px;
    }
  }
}
</style>
