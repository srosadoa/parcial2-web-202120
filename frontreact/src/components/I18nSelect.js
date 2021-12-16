import React from 'react';
import { LOCALES } from '../i18n/locales';

export const I18nSelect = () => {
  function seleccionarIdioma(s){
    const nl = s.target.value;
    
  }
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