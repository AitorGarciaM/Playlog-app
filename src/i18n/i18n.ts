import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import es from './es.json';
import cat from './cat.json';

i18n.use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es },
            cat: { translation: cat },
        },
        lng: 'en',
        fallbackLng: 'es',
        debug: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;