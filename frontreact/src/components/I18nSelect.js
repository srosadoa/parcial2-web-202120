import React, {useContext} from 'react';
import { LOCALES } from '../i18n/locales';
import en from './../components/USA.png'
import es from './../components/colombia.png'

export const I18nSelect = () => {
  const idioma = LOCALES.ENGLISH;
  return (
    <div className="header">
      <div className="navbar">
        <div className="idiomas">
          <button onClick={() => idioma.establecerLenguaje('es-co')}>Español</button>
          <button onClick={() => idioma.establecerLenguaje('en-us')}>English</button>
        </div>
      </div>
    </div>
  );
};
export default I18nSelect;