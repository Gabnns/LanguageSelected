import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './translations/en.json';
import esTranslation from './translations/es.json';
// Adicione mais importações conforme necessário para outros idiomas

// Configurações de inicialização do i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
    // Adicione mais idiomas conforme necessário
  },
  lng: 'en', // Idioma padrão
  fallbackLng: 'en', // Idioma de fallback se uma tradução não estiver disponível para o idioma selecionado
  interpolation: {
    escapeValue: false, // Evita que valores sejam escapados para HTML (por padrão, escapado)
  },
});

export default i18n;