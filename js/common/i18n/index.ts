import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, es } from './supportedLanguages';

i18n.fallbacks = true;
i18n.translations = { en, es };
i18n.locale = Localization.locale;

export { i18n };