import React, {useContext} from 'react';
import { LOCALES } from '../i18n/locales';
import en from './../components/eeuu.png'
import es from './../components/spain.png'

export const I18nSelect = () => {
  const idioma = LOCALES.ENGLISH;
  return (
    <div className="header">
      <div className="navbar">
        <div className="idiomas">
          <button onClick={() => idioma.establecerLenguaje('es-co')}><img src={es} alt = ""/></button>
          <button onClick={() => idioma.establecerLenguaje('en-us')}><img src={en} alt = ""/></button>
        </div>
      </div>
    </div>
  );
};
export default I18nSelect;