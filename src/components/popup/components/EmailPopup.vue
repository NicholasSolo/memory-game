<template>
  <div class="email-popup">
    <h2 class="title" v-html="mainState.gameData.emailPopup.title.value" />

    <p class="text" v-html="mainState.gameData.emailPopup.subTitle.value" />

    <form @submit.prevent="submit" class="user-form">
      <div class="inputs">
        <div :class="['input-wrapper', { _error: state.errors.includes('name') }]">
          <input
            v-model="state.name"
            type="text"
            :class="['name', { _error: state.errors.includes('name') }]"
            placeholder="Имя"
            @input="filterInput($event, 'name')"
            @blur="filterInput($event, 'name')"
            @focus="clearError('name')"
          />

          <p class="input-err" v-html="getNameErrorText" />
        </div>

        <div :class="['input-wrapper', { _error: state.errors.includes('email') }]">
          <input
            v-model="state.email"
            type="text"
            :class="['email', { _error: state.errors.includes('email') }]"
            placeholder="Email"
            @input="filterInput($event, 'email')"
            @blur="filterInput($event, 'email')"
            @focus="clearError('email')"
          />

          <p class="input-err">Введите корректный email</p>
        </div>
      </div>

      <label :class="['agree', { _checked: state.agree, _error: state.errors.includes('agree') }]">
        <input v-model="state.agree" type="checkbox" class="check" @change="clearError('agree')" />

        <p class="agree-text">
          Согласен получать email-рассылки и&nbsp;с&nbsp;<a
            :href="mainState.gameData.gamePolicyLink.value"
            class="policy"
            target="_blank"
            >Политикой конфиденциальности</a
          >
        </p>
      </label>

      <app-button type="popup">Получить приз!</app-button>
    </form>

    <div v-if="state.serverError" class="server-error">Что-то пошло не так...Попробуйте позже</div>
  </div>
</template>

<script setup>
import AppButton from '../../general/AppButton.vue';
import { computed, reactive } from 'vue';
import { mainState, mainMethods } from '../../../store/store.js';
import sendForm from '../../../composables/sendAnswers.js';

const emailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const state = reactive({
  name: '',
  email: '',
  agree: false,
  errors: [],
  serverError: false,
});

const getNameErrorText = computed(() => {
  return !state.name ? 'Введите имя' : 'Введите корректное имя';
});

const filterInput = ({ target }, type) => {
  if (type === 'name') {
    target.value = target.value.replace(/[^А-Яа-яёЁ\s]/gi, '');
  }

  if (type === 'email') {
    target.value = target.value.replace(/[А-Яа-яёЁ\s]/gi, '');
  }
};

const clearError = err => {
  const { errors } = state;
  if (errors.includes(err)) {
    errors.splice(errors.indexOf(err), 1);
  }
};

const checkErrors = () => {
  if (!state.agree && !state.errors.includes('agree')) {
    state.errors.push('agree');
  }

  if (
    (!state.name || !/^[Ёёа-яА-Я\s]+$/.test(state.name.trim())) &&
    !state.errors.includes('name')
  ) {
    state.errors.push('name');
  }

  if ((!state.email || !emailReg.test(state.email.trim())) && !state.errors.includes('email')) {
    state.errors.push('email');
  }
};

const submit = async () => {
  checkErrors();
  state.serverError = false;

  if (!state.errors.length) {
    const response = await sendForm({
      email: state.email.trim(),
      name: state.name.trim(),
    });

    if (response) {
      await mainMethods.setUserStatus(response.isOldUser);

      mainMethods.setPopupName('FinalPopup');
    } else {
      state.serverError = true;
    }
  }
};
</script>

<style scoped lang="scss">
.email-popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 46px 60px 38px 60px;

  .title {
    max-width: 600px;
    margin-bottom: 27px;
    font-size: 50px;
    line-height: 1;
    font-weight: 700;
    text-align: center;
    color: #e21a1a;
  }

  .text {
    max-width: 530px;
    margin-bottom: 28px;
    text-align: center;
  }
  .user-form {
    .inputs {
      margin-bottom: 32px;

      .input-wrapper {
        position: relative;

        .name,
        .email {
          width: 320px;
          height: 60px;
          padding: 16px 24px;
          border: 2px solid #f9ddca;
          border-radius: 10px;
          font-size: 20px;
          line-height: 28px;
          color: #2d2d2d;
          background: #ffffff;

          &._error {
            border: 2px solid #e21a1a;
            color: #e21a1a;

            &::placeholder {
              color: #e21a1a;
            }
          }
        }
        .name {
          margin-bottom: 15px;
        }

        .input-err {
          content: '';
          position: absolute;
          top: 53px;
          left: 10px;
          height: 15px;
          font-size: 10px;
          color: #e21a1a;
          opacity: 0;
        }

        &._error {
          .input-err {
            opacity: 1;
          }
        }
      }
    }

    .agree {
      position: relative;
      display: flex;
      margin-bottom: 30px;
      padding-left: 30px;

      .agree-text {
        max-width: 280px;
        font-size: 12px;
        line-height: 16px;
        color: #94877f;

        .policy {
          text-decoration: underline;
          color: #94877f;
        }
      }

      .check {
        display: none;
      }

      &:before {
        content: '';
        position: absolute;
        top: 2px;
        left: 0;
        width: 14px;
        height: 14px;
        border: 1px solid #94877f;
      }

      &:after {
        content: '';
        position: absolute;
        top: 5px;
        left: 3px;
        width: 10px;
        height: 10px;
        background-image: url('img/check.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        opacity: 0;
        transition: opacity 0.15s;
      }

      &._checked {
        &:after {
          opacity: 1;
        }
      }

      &._error {
        .agree-text {
          color: #e21a1a;

          .policy {
            color: #e21a1a;
          }
        }

        &:before {
          border: 1px solid #e21a1a;
        }
      }
    }
  }

  .server-error {
    font-size: 14px;
    color: #e21a1a;
  }
}

@media screen and (max-width: 1000px) {
  .email-popup {
    padding: 22px 22px 22px 22px;
    background-repeat: no-repeat;
    background-position: right 70px;

    .title {
      max-width: 370px;
      margin-bottom: 22px;
      font-size: 32px;
    }

    .text {
      max-width: 300px;
    }

    .user-form {
      .inputs {
        margin-bottom: 21px;

        .input-wrapper {
          .name,
          .email {
            width: 280px;
            height: 50px;
            padding: 15px 24px;
            font-size: 16px;
            line-height: 19px;
          }
          .name {
            margin-bottom: 13px;
          }

          .input-err {
            top: 46px;
          }
        }
      }

      :deep(.app-button) {
        width: 280px;
        padding: 15px 0;
        font-size: 16px;
      }

      .agree {
        margin-bottom: 24px;
        padding-left: 30px;

        .agree-text {
          max-width: 240px;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .email-popup {
    padding: 15px 10px 13px 10px;
    background-repeat: no-repeat;
    background-position: right 40px;

    .title {
      max-width: 280px;
      margin-bottom: 17px;
      font-size: 26px;
    }

    .text {
      max-width: 190px;
      margin-bottom: 20px;
    }

    .user-form {
      .inputs {
        margin-bottom: 20px;

        .input-wrapper {
          .name,
          .email {
            width: 240px;
            height: 45px;
            padding: 10px 24px;
            font-size: 14px;
            line-height: 16px;
          }
          .name {
            margin-bottom: 12px;
          }

          .input-err {
            top: 43px;
          }
        }
      }

      :deep(.app-button) {
        width: 240px;
        padding: 15px 0;
        font-size: 16px;
      }

      .agree {
        margin-bottom: 15px;
        padding-left: 30px;

        .agree-text {
          font-size: 11px;
        }
      }
    }
  }
}
</style>
