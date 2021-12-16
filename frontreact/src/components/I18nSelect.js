import React from 'react';
import { LOCALES } from '../i18n/locales';

export const I18nSelect = ({idomaCambio, idiomaActual}) => {
  function cambioDeidioma(e) {
    const nl = e.target.value;
    idomaCambio(nl);
  }
  return (
    <select
      className="i18n-selector"
      value={idiomaActual}
      onChange={cambioDeidioma}
    ><option value={LOCALES.SPANISH}>
        {idiomaActual === LOCALES.ENGLISH ? "Spanish" : "Español"}
      </option>
      <option value={LOCALES.ENGLISH}>
        {idiomaActual === LOCALES.ENGLISH ? "English" : "Inglés"}
      </option>
    </select>
  );
};