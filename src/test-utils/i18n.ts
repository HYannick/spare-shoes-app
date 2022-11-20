import { createI18n } from "vue-i18n";

export const mockI18n = (opts?: any) => createI18n({ legacy: false, ...opts });
