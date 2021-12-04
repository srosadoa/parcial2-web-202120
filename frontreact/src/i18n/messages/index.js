import en from './en-us';
import es from './es-co';
import { LOCALES } from '../locales';
import {IntlProvider} from 'react-intl';

ReactDOM.render(
	<IntlProvider locale="es-co" messages= {localeEsMessages} locale="en-us" messages= {localeEsMessages}>
		<LOCALES/>
	</IntlProvider>, document.getElementById("root")
);

export default allLanguages;