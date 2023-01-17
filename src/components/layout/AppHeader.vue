<template>
  <header class="header app-container">
    <a :href="mainState.gameData.logoLink.value" class="header-link" target="_blank">
      <img :src="mainState.gameData.logo.value" alt="logo" class="logo-img" />
    </a>
  </header>
</template>

<script setup>
import { mainState } from '../../store/store';
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  padding: 60px 0 0 0;

  .header-link {
    .logo-img {
      display: block;
      max-width: 280px;
      max-height: 80px;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
}

@media screen and (max-width: 1200px) {
  .header {
    margin-bottom: 40px;
    .header-link {
      .logo-img {
        max-width: 240px;
        max-height: 48px;
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .header {
    padding: 40px 0 0 0;
    .header-link {
      .logo-img {
        max-width: 200px;
        max-height: 40px;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .header {
    .header-link {
      .logo-img {
        max-width: 160px;
        max-height: 30px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .header {
    margin-bottom: 26px;
    padding: 20px 0 0 0;
    .header-link {
      .logo-img {
        max-width: 140px;
        max-height: 28px;
      }
    }
  }
}
</style>
