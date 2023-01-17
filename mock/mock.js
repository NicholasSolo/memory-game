window.state = {
  // выбор темы
  theme: {
    type: 'select',
    title: 'Тема оформления',
    placeholder: 'Тема',
    default: 'main',
    value: 'main',
    options: [
      {
        value: 'main',
        title: 'Стандартная',
      },
      {
        value: 'dark',
        title: 'Темная',
      },
    ],
  },

  // инфо-блок
  logo: {
    type: 'text',
    title: 'Ссылка на логотип',
    placeholder: 'Лого',
    value: 'https://static.tildacdn.com/tild6432-3333-4962-b864-363866663437/logoOOC1.svg',
  },
  logoLink: {
    type: 'text',
    title: 'Ссылка на сайт клиента',
    placeholder: 'Ссылка',
    value: 'https://v3.ru.vuejs.org/',
  },
  header: {
    type: 'text',
    title: 'Текст заголовка',
    placeholder: 'Введите текст',
    value: 'Найдите пару для каждого изображения',
  },
  subtitle: {
    type: 'text',
    title: 'Текст подзаголовка',
    placeholder: 'Введите текст',
    value: 'Получите ценные подарки',
  },
  description: {
    type: 'text',
    title: 'Текст описания',
    placeholder: 'Введите текст',
    value:
      'Задача игры — успеть собрать все пары за 1 минуту! Для этого нажимайте на карточки и соединяйте одинаковые картинки.',
  },

  // игровое поле
  cards: {
    first: {
      type: 'text',
      title: 'Ссылка на иконку',
      placeholder: 'Вставьте ссылку',
      value:
        'https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg?w=2000',
    },
    first2x: {
      type: 'text',
      title: 'Ссылка на иконку Retina',
      placeholder: 'Вставьте ссылку',
      value:
        'https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg?w=2000',
    },
    second: {
      type: 'text',
      title: 'Ссылка на иконку',
      placeholder: 'Вставьте ссылку',
      value:
        'https://img.freepik.com/free-vector/astronaut-listening-music-with-headphone-peace-hand-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3375.jpg?w=2000',
    },
    second2x: {
      type: 'text',
      title: 'Ссылка на иконку Retina',
      placeholder: 'Вставьте ссылку',
      value:
        'https://img.freepik.com/free-vector/astronaut-listening-music-with-headphone-peace-hand-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3375.jpg?w=2000',
    },
    third: {
      type: 'text',
      title: 'Ссылка на иконку',
      placeholder: 'Вставьте ссылку',
      value:
        'https://cn.i.cdn.ti-platform.com/content/20/the-amazing-world-of-gumball/showpage/za/gumball-carousel.a94b8e60.png',
    },
    third2x: {
      type: 'text',
      title: 'Ссылка на иконку Retina',
      placeholder: 'Вставьте ссылку',
      value:
        'https://cn.i.cdn.ti-platform.com/content/20/the-amazing-world-of-gumball/showpage/za/gumball-carousel.a94b8e60.png',
    },
    fourth: {
      type: 'text',
      title: 'Ссылка на иконку',
      placeholder: 'Вставьте ссылку',
      value:
        'https://img.freepik.com/free-vector/cute-monster-kid-cartoon-vector-icon-illustration-monster-holiday-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3995.jpg?w=2000',
    },
    fourth2x: {
      type: 'text',
      title: 'Ссылка на иконку Retina',
      placeholder: 'Вставьте ссылку',
      value:
        'https://img.freepik.com/free-vector/cute-monster-kid-cartoon-vector-icon-illustration-monster-holiday-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3995.jpg?w=2000',
    },
    fifth: {
      type: 'text',
      title: 'Ссылка на иконку',
      placeholder: 'Вставьте ссылку',
      value:
        'https://img.freepik.com/free-vector/cute-bad-cat-wearing-suit-sunglasses-with-baseball-bat-cartoon-icon-illustration-animal-fashion-icon-concept-isolated-flat-cartoon-style_138676-2170.jpg?w=2000',
    },
    fifth2x: {
      type: 'text',
      title: 'Ссылка на иконку Retina',
      placeholder: 'Вставьте ссылку',
      value:
        'https://img.freepik.com/free-vector/cute-bad-cat-wearing-suit-sunglasses-with-baseball-bat-cartoon-icon-illustration-animal-fashion-icon-concept-isolated-flat-cartoon-style_138676-2170.jpg?w=2000',
    },
    sixth: {
      type: 'text',
      title: 'Ссылка на иконку',
      placeholder: 'Вставьте ссылку',
      value:
        'https://img.freepik.com/free-vector/cute-koala-floating-with-balloon-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2349.jpg?w=2000',
    },
    sixth2x: {
      type: 'text',
      title: 'Ссылка на иконку Retina',
      placeholder: 'Вставьте ссылку',
      value:
        'https://img.freepik.com/free-vector/cute-koala-floating-with-balloon-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2349.jpg?w=2000',
    },
  },
  cardBack: {
    type: 'text',
    title: 'Рубашка',
    placeholder: 'Ссылка на изображение рубашки',
    value:
      'https://media.istockphoto.com/photos/red-question-mark-picture-id637766866?k=20&m=637766866&s=170667a&w=0&h=I_w_8ngkZLcuJU718XpJvDxZjXj7pgWrCTxhXCZlyuk=',
  },
  timeMinutes: {
    type: 'text',
    title: 'Количество минут',
    placeholder: 'Минуты',
    value: 1,
  },
  timeSeconds: {
    type: 'text',
    title: 'Количество секунд',
    placeholder: 'Секунды',
    value: 0,
  },

  // popups
  helloPopup: {
    title: {
      type: 'text',
      title: 'Заголовок приветственного попапа',
      placeholder: 'Введите текст',
      value: 'Нажимайте на карточки, находите пары и&nbsp;получайте подарки!',
    },
    subTitle: {
      type: 'text',
      title: 'Подзаголовок приветственного попапа',
      placeholder: 'Введите текст',
      value: 'Можно добавить доп.описание. Если не нужно, просто оставить это поле пустым',
    },
  },
  emailPopup: {
    title: {
      type: 'text',
      title: 'Заголовок email попапа',
      placeholder: 'Введите текст',
      value: 'Все пары собраны! <br /> Перейдем к подарку!',
    },
    subTitle: {
      type: 'text',
      title: 'Подзаголовок email попапа',
      placeholder: 'Введите текст',
      value: 'Оставьте email и свое имя — мы отправим вам информацию о выигрыше на почту.',
    },
  },
  // футер
  gameRulesLink: {
    type: 'text',
    title: 'Правила розыгрыша',
    placeholder: 'Ссылка на правила',
    value: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  gamePolicyLink: {
    type: 'text',
    title: 'Политика обработки перс. данных',
    placeholder: 'Ссылка на политику',
    value: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  footerPhone: {
    type: 'text',
    title: 'Телефон службы поддержки',
    placeholder: 'Телефон службы поддержки',
    value: '8 800 555 35 35',
  },
  footerEmail: {
    type: 'text',
    title: 'Email службы поддержки',
    placeholder: 'Email службы поддержки',
    value: 'info@info.ucoz.net',
  },
  footerLegalInfo: {
    type: 'text',
    title: 'Юридическая информация',
    placeholder: 'Юридическая информация',
    value:
      'ООО «Зеленоглазое такси» 115162, Россия, г. Москва, ул. Зеленая, д. 31г ОГРН 10477777709510',
  },
};
