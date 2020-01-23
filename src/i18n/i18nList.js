import React from 'react';
import PropTypes from 'prop-types';

const LanguageList = ({ lang, default_language, i18n, i18n_set, setLang }) => {

  //console.log('LanguageList', default_language, lang, setLang);

  return (
    <div>
      <form>
        <h2>{ i18n["Language Setup"] }</h2>
        {
           lang.map((Lang, index) => (
              <div className="radio" key={index}>
                <label>
                  <input type="radio" value={Lang} checked={default_language === Lang } onChange={ setLang } /> { i18n_set[Lang][Lang] }
                </label>
              </div>
           ))
        }
      </form>
    </div>
  );
};

LanguageList.propTypes = {
  lang: PropTypes.array.isRequired,
  default_language: PropTypes.string.isRequired,
  i18n: PropTypes.object.isRequired,
};

export default LanguageList;