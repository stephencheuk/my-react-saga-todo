import { connect } from 'react-redux';
import LanguageList from './i18nList';

const mapStateToProps = state => {

  //console.log('i18nContainer.js', state);

  const i18n_set = state.i18n.lang;
  const default_language = state.i18n.default_language;
  const lang = state.i18n.type;
  const i18n = i18n_set[default_language];

  return { lang, default_language, i18n, i18n_set };
};

const mapDispatchToProps = dispatch => ({
  setLang: (e) => {
    //console.log('dispatch setLang', dispatch, { type: 'SET_LANGUAGE', payload: { 'language': e.target.value } });
    dispatch({ type: 'SET_LANGUAGE', payload: { 'language': e.target.value } });
  },
});

//Pass state (store) value as props "mapStateToProps" to LanguageList
//Pass dispatch func as props "mapDispatchToProps" to LanguageList
const LanguageContainer = connect(mapStateToProps, mapDispatchToProps)(LanguageList);

export default LanguageContainer;