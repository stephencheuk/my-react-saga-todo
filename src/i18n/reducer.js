
const initialState = {
  // support en , zh & cn
  type: ['en', 'zh', 'cn'],

  // default lang is en
  default_language: 'en',

  // lang text mapping hash
  lang : {
    'en' : {
      'en' : 'English',
      'Language Setup' : 'Language Setup',
    },
    'zh' : {
      'zh' : '繁體中文',
      'Language Setup' : '語言設定',
    },
    'cn' : {
      'cn' : '简体中文',
      'Language Setup' : '语言设定',
    }
  }
};


const i18nReducer = (state = initialState, action) => {

  console.log("src/i18n/reducer.js", state, action);

  if (action.type === 'SET_LANGUAGE') {

    let { default_language }  = state;
    default_language = action.payload.language;

    return {...state, default_language};
  }
  return state;
};

export default i18nReducer;
