import { createI18n } from "vue-i18n";

const commonI18n = {
  en: {
    common: {
      hey: "Hello Rider",
    },
  },
  fr: {
    common: {
      hey: "Salut Rider",
    },
  },
};

export const i18n = createI18n({
  locale: "fr",
  fallbackLocale: "fr",
  messages: commonI18n,
  legacy: false,
});
