<template>
  <button
    v-if="!isLink"
    :class="['app-button', { '_popup-btn': type === 'popup' }]"
    @click="$emit('click-event')"
  >
    <slot></slot>
  </button>
  <a v-else :href="href" class="app-link" target="_blank"> <slot></slot> </a>
</template>

<script setup>
defineProps({
  isLink: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'button',
  },
});
</script>

<style scoped lang="scss">
.app-button {
  display: flex;
  justify-content: center;
  padding: 13px 100px;
  border-radius: 10px;
  font-size: 24px;
  line-height: 33px;
  font-weight: 700;
  color: #2d2d2d;
  background-color: #ffcc00;
  box-shadow: 16px 66px 27px rgba(81, 9, 9, 0.01), 9px 37px 23px rgba(81, 9, 9, 0.05),
    4px 17px 17px rgba(81, 9, 9, 0.09), 1px 4px 9px rgba(81, 9, 9, 0.1), 0 0 0 rgba(81, 9, 9, 0.1);

  &:hover {
    color: #ffffff;
    background: #e21a1a;
  }

  &:disabled {
    color: #ffffff;
    background-color: #94877f;
  }

  @media screen and (max-width: 800px) {
    padding: 13px 80px;
    font-size: 18px;
    line-height: 20px;
  }

  @media screen and (max-width: 500px) {
    padding: 13px 60px;
    font-size: 16px;
  }

  &._popup-btn {
    width: 320px;
    padding: 20px 0;
    font-size: 20px;
    line-height: 20px;
    color: #ffffff;
    background: #e21a1a;

    &:hover {
      color: #2d2d2d;
      background-color: #ffcc00;
    }

    @media screen and (max-width: 768px) {
      width: 280px;
      padding: 15px 0;
      font-size: 16px;
    }

    @media screen and (max-width: 500px) {
      width: 240px;
      font-size: 14px;
      line-height: 16px;
    }
  }
}

.app-link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 228px;
  padding: 14px 0;
  border: 2px solid #ffffff;
  border-radius: 8px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: #e21a1a;
  background-color: #ffffff;

  &:hover {
    border: 2px solid #ffffff;
    background-color: #e21a1a;
    color: #ffffff;
  }

  @media screen and(max-width: 960px) {
    width: 202px;
    font-size: 12px;
    line-height: 14px;
  }

  @media screen and(max-width: 500px) {
    padding: 8px 0;
    width: 186px;
  }
  @media screen and(max-width: 400px) {
    width: 100%;
  }
}
</style>
