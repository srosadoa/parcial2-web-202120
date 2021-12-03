import React, {useContext} from 'react';
import { LOCALES } from '../i18n/locales';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import {idiomaCont} from './../index.js'

export const I18nSelect = () => {
  const idioma = useContext(idiomaCont);
  return (
    <div className="header">
      <div className="navbar">
        <div className="banderas">
          <button onClick={() => idioma.establecerLenguaje('es-co')}></button>
          <button onClick={() => idioma.establecerLenguaje('en-us')}></button>
        </div>
      </div>
    </div>
  );
};
export default Header;