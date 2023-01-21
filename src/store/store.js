import { reactive } from 'vue';

const state = reactive({
  popupName: 'HelloPopup',
  isUserOld: false,
  isGameActive: false,
  gameData: null,
});

const methods = {
  setPopupName(payload) {
    state.popupName = payload;

    if (payload) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  },
  setState(payload) {
    state.gameData = payload;
  },
  setUserStatus(payload) {
    state.isUserOld = payload;
  },
};

export { state as mainState, methods as mainMethods };
