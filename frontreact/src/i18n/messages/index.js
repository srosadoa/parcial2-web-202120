import en from './en-us';
import es from './es-co';
import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

const idiomaCont = React.createContext();

const idiomaProv = ({ children }) => {
  let mensajesPD;
  const idioma = localStorage.getItem('idioma');

  if (idioma) {
    if (lang === 'es-co') {
      mensajesPD = MensajesEspañol;
    } else if (lang === 'en-us') {
      mensajesPD = MensajesIngles
    }
  }

  const [mensajes, estabMsj] = useState(mensajesPD);
  const [locale, estabLocal] = useState(mensajesPD);

  const estabIdioma = (lenguaje) => {
    switch (lenguaje) {
      case 'es-co':
        estabMsj(MensajesEspañol);
        estabLocal('es-co');
        localStorage.setItem('idioma', 'es-co');
        break;
      case 'en-US':
        estabMsj(MensajesIngles);
        estabLocal('en-us');
        localStorage.setItem('idioma', 'en-us');
        break;
    }
  }

  return (
    <idiomaCont.Provider value={{ estabIdioma: estabIdioma }}>
      <IntlProvider locale={locale} messages={mensajes}>
        {children}
      </IntlProvider>
    </idiomaCont.Provider>
  );
}

export { idiomaProv, idiomaCont };
const allLanguages = {
  ...en,
  ...es,
};

export default allLanguages;
