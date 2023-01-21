<template>
  <div class="game">
    <div :class="['field', { _active: mainState.isGameActive }]">
      <div
        v-for="(item, index) in fieldBlocks"
        :key="index"
        :class="[
          'item',
          {
            _selected:
              currentItems.includes(currentItems.find(item => item.index === index)) ||
              totalItems.includes(totalItems.find(item => item.index === index)),
          },
        ]"
        @click="clickHandler({ index, item })"
      >
        <img
          :src="item.img.x1"
          :srcset="`${item.img.x1}, ${item.img.x2} 2x`"
          :alt="item.id"
          class="icon"
        />
      </div>

      <div class="timer">
        0{{ time.minutes }}:{{ time.seconds >= 10 ? time.seconds : `0${time.seconds}` }}
      </div>
    </div>
    <app-button @click-event="startGame" :disabled="mainState.isGameActive">Играть!</app-button>
  </div>
</template>

<script setup>
import AppButton from './general/AppButton.vue';
import startTimer, { time, resetTime, pauseTimer } from '../composables/timer.js';
import { mainMethods, mainState } from '../store/store.js';
import { computed, reactive, ref } from 'vue';

// исходные иконки
const gameItems = [
  {
    id: 1,
    value: 1,
    img: {
      x1: mainState.gameData.cards.first.value,
      x2: mainState.gameData.cards.first2x.value,
    },
  },
  {
    id: 2,
    value: 2,
    img: {
      x1: mainState.gameData.cards.second.value,
      x2: mainState.gameData.cards.second2x.value,
    },
  },
  {
    id: 3,
    value: 3,
    img: {
      x1: mainState.gameData.cards.third.value,
      x2: mainState.gameData.cards.third2x.value,
    },
  },
  {
    id: 4,
    value: 4,
    img: {
      x1: mainState.gameData.cards.fourth.value,
      x2: mainState.gameData.cards.fourth2x.value,
    },
  },
  {
    id: 5,
    value: 5,
    img: {
      x1: mainState.gameData.cards.fifth.value,
      x2: mainState.gameData.cards.fifth2x.value,
    },
  },
  {
    id: 6,
    value: 6,
    img: {
      x1: mainState.gameData.cards.sixth.value,
      x2: mainState.gameData.cards.sixth2x.value,
    },
  },
];

// перемешанные иконки
const fieldBlocks = ref([...gameItems, ...gameItems].sort(() => Math.random() - 0.5));

const currentItems = ref([]);
const totalItems = ref([]);
const game = ref(null);

const state = reactive({
  currentItemsCounter: 0,
});

const cardBack = computed(() => {
  return `url(${mainState.gameData.cardBack.value})`;
});

const clickHandler = arg => {
  if (mainState.isGameActive) {
    if (currentItems.value.length < 2) {
      if (state.currentItemsCounter < 1) {
        currentItems.value.push(arg);
        state.currentItemsCounter += 1;
      }
      // проверяем, чтобы не добавился дублирующий элемент
      if (state.currentItemsCounter === 1 && currentItems.value[0].index !== arg.index) {
        currentItems.value.push(arg);
        state.currentItemsCounter = 0;
      }
    }

    if (currentItems.value.length === 2) {
      setTimeout(() => {
        if (currentItems.value[0].item.id === currentItems.value[1].item.id) {
          totalItems.value = [...totalItems.value, ...currentItems.value];
          currentItems.value = [];

          if (totalItems.value.length === 12) {
            pauseTimer();
            resetTime();
            mainState.isGameActive = false;

            mainMethods.setPopupName('EmailPopup');

            totalItems.value = [];

            // если челик захочет сыграть еще раз по фану, перемешиваем поле
            shuffleField();
          }
        } else {
          currentItems.value = [];
        }
      }, 1000);
    }
  }
};

const startGame = () => {
  mainState.isGameActive = true;
  //костылим через DOM
  const game = document.querySelector('.game');
  game.scrollIntoView();

  setTimeout(() => {
    showItems();
  }, 1000);

  setTimeout(() => {
    startTimer(() => {
      mainState.isGameActive = false;
      resetTime();

      // если первый раз не собрал все пары, перемешиваем поле
      shuffleField();

      mainMethods.setPopupName('TimeOverPopup');

      // Время игры вышло. Показался попап
      totalItems.value = [];
      currentItems.value = [];
    });
  }, 3000);
};

const showItems = () => {
  totalItems.value = new Array(12).fill(undefined).map((item, index) => ({ index }));
  setTimeout(() => {
    totalItems.value = [];
  }, 2000);
};

const shuffleField = () => {
  fieldBlocks.value = [...gameItems, ...gameItems].sort(() => Math.random() - 0.5);
};
</script>

<style scoped lang="scss">
.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  .field {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 24px;
    width: 560px;
    height: 424px;
    margin-bottom: 30px;
    padding: 23px;
    background-color: #e21a1a;
    box-shadow: 0 111px 44px rgba(57, 4, 7, 0.01), 0 62px 37px rgba(57, 4, 7, 0.05),
      0 28px 28px rgba(57, 4, 7, 0.09), 0 7px 15px rgba(57, 4, 7, 0.1), 0 0 0 rgba(57, 4, 7, 0.1);
    border-radius: 4px;
    transition: height, width 1s;

    .item {
      position: relative;
      cursor: pointer;
      width: 110px;
      height: 110px;
      transition: height, width 1s;

      .icon {
        display: block;
        width: 110px;
        height: 110px;
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 2px;
        background-image: v-bind(cardBack);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: 0 21px 8px rgba(46, 5, 5, 0.01), 0 12px 7px rgba(46, 5, 5, 0.05),
          0 5px 5px rgba(46, 5, 5, 0.09), 0 1px 3px rgba(46, 5, 5, 0.1), 0 0 0 rgba(46, 5, 5, 0.1);
        opacity: 1;
        transition: all 0.25s;
      }

      &:hover {
        transition: all 0.25s;
        transform: scale(1.05);
      }

      &._selected {
        &:before {
          opacity: 0;
        }
      }
    }

    .timer {
      position: absolute;
      top: 20px;
      right: -74px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 74px;
      height: 32px;
      padding: 5px 0;
      font-size: 18px;
      line-height: 25px;
      font-weight: 700;
      text-align: center;
      border-radius: 0 2px 2px 0;
      background: #ffcc00;
    }

    &._active {
      width: 960px;
      height: 740px;
      padding: 60px;
      grid-gap: 40px;

      .item {
        width: 180px;
        height: 180px;

        .icon {
          width: 180px;
          height: 180px;
        }
      }

      .timer {
        top: 55px;
        right: -100px;
        width: 100px;
        height: 60px;
        font-size: 30px;
        line-height: 32px;
      }
    }
  }
}

@media screen and (max-width: 1300px) {
  .game {
    margin-bottom: 20px;

    .field {
      grid-gap: 18px;
      width: 460px;
      height: 352px;

      .item {
        width: 90px;
        height: 90px;

        .icon {
          width: 90px;
          height: 90px;
        }
      }

      .timer {
        right: -71px;
        width: 71px;
        height: 26px;
        padding: 5px 0;
        font-size: 16px;
        line-height: 20px;
      }

      &._active {
        width: 780px;
        height: 600px;
        padding: 48px;
        grid-gap: 33px;

        .item {
          width: 146px;
          height: 146px;

          .icon {
            width: 146px;
            height: 146px;
          }
        }

        .timer {
          top: 47px;
          right: -80px;
          width: 80px;
          height: 48px;
          font-size: 24px;
          line-height: 24px;
        }
      }
    }
  }
}

@media screen and (max-width: 950px) {
  .game {
    .field {
      &._active {
        width: 620px;
        height: 478px;
        margin-top: 80px;
        padding: 40px;
        grid-gap: 25px;

        .item {
          width: 116px;
          height: 116px;

          .icon {
            width: 116px;
            height: 116px;
          }
        }

        .timer {
          top: -30px;
          right: 260px;
          width: 90px;
          height: 30px;
          border-radius: 4px 4px 0 0;
          font-size: 20px;
          line-height: 20px;
        }
      }
    }
  }
}

@media screen and (max-width: 680px) {
  .game {
    .field {
      .timer {
        top: -26px;
        right: 200px;
        width: 60px;
        height: 26px;
        padding: 5px 0;
        border-radius: 4px 4px 0 0;
        background-image: none;
        background-color: #ffcc00;
      }
    }
  }
}

@media screen and (max-width: 660px) {
  .game {
    .field,
    .field._active {
      padding: 15px;
      grid-gap: 12px;
      width: 320px;
      height: 248px;

      .item {
        width: 64px;
        height: 64px;

        .icon {
          width: 64px;
          height: 64px;
        }
      }

      .timer {
        top: -30px;
        right: 130px;
        width: 60px;
        height: 30px;
        font-size: 14px;
        line-height: 16px;
      }
    }

    .field._active {
      margin-top: 50px;

      .timer {
        right: 130px;
      }
    }
  }
}
</style>
