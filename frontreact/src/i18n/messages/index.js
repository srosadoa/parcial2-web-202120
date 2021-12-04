import en from './en-us';
import es from './es-co';
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import { LOCALES } from '../locales';

const allLanguages = {
	...en,
	...es,
  };

export default allLanguages;