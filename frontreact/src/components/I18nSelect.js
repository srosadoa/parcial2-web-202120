import React, {useContext} from 'react';
import { LOCALES } from '../i18n/locales';

export const I18nSelect = () => {
  const idioma;
  return (
    <div className="header">
      <div className="navbar">
        <div className="idiomas">
          <button onClick={() => idioma.establecerLenguaje('es-co')}></button>
          <button onClick={() => idioma.establecerLenguaje('en-us')}></button>
        </div>
      </div>
    </div>
  );
};
export default I18nSelect;