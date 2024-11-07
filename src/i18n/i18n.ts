import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HOME_EN from "../../src/locales/en/home.json";
import HOME_JP from "../../src/locales/jp/home.json";
import PRODUCT_EN from "../../src/locales/en/product.json";
import PRODUCT_JP from "../../src/locales/jp/product.json";

export const languages = {
  en: "English",
  jp: "japan",
};
export const resources = {
  en: {
    home: HOME_EN,
    product: PRODUCT_EN,
  },
  jp: {
    home: HOME_JP,
    product: PRODUCT_JP,
  },
};

export const defaultNS = "home";

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  ns: ["home", "product"],
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
