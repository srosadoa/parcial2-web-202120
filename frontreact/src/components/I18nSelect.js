import React from 'react';
import { LOCALES } from '../i18n/locales';

export const I18nSelect = ({ idomaCambio, idiomaActual }) => {
  function cambioDeidioma(e) {
    const nl = e.target.value;
    idomaCambio(nl);
  }
  return (
    //Seleccionamos entre idiomas: ingles y español
    <select
      className="i18n-selector"
      value={idiomaActual}
      onChange={cambioDeidioma}
    >
      <option value={LOCALES.ENGLISH}>
        {idiomaActual === LOCALES.ENGLISH ? "English" : "Inglés"}
      </option>
      <option value={LOCALES.SPANISH}>
        {idiomaActual === LOCALES.ENGLISH ? "Spanish" : "Español"}
      </option>
    </select>
  );
};