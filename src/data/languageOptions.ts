import { Locale } from "./types";

export type LanguageOption = {
  code: Locale;
  name: string;
  callToAction: string;
  isRTL: boolean;
  changeLanguage: string;
  title?: string;
};

const languageOptions: LanguageOption[] = [
  {
    code: Locale.ar,
    name: "عربي",
    callToAction: "باللغة العربية vaxxed.as استخدم",
    isRTL: true,
    changeLanguage: "غير اللغة",
    title: "مسح COVID الخاص بك في نيوزيلندا"
  },
  {
    code: Locale.de,
    name: "Deutsch",
    callToAction: "Verwenden Sie vaxxed.as in Deutsch",
    isRTL: false,
    changeLanguage: "Sprache ändern",
    title: "Scannen Sie Ihren NZ CovidPass"
  },
  {
    code: Locale.en,
    name: "English",
    callToAction: "Use vaxxed.as in English",
    isRTL: false,
    changeLanguage: "Change language",
    title: "Scan your NZ COVIDpass"
  },
  {
    code: Locale.es,
    name: "Español",
    callToAction: "Utilice vaxxed.as en Español",
    isRTL: false,
    changeLanguage: "Cambiar idioma",
    title: "Escanea tu NZ COVIDPass"
  },
  {
    code: Locale.fa,
    name: "فارسی",
    callToAction: "استفاده از vaxxed.asبه زبان فارسی",
    isRTL: true,
    changeLanguage: "تغییر زبان",
    title: "CovidPass خود را اسکن نمایید. "
  },
  {
    code: Locale.hi,
    name: "अंग्रेज़ी",
    callToAction: "हिंदी में vaxxed.as का प्रयोग करें",
    isRTL: false,
    changeLanguage: "भाषा बदलें",
    title: "अपने NZ COVIDPass को स्कैन करें"
  },
  {
    code: Locale.mi,
    name: "Te reo Māori",
    callToAction: "Whakamahia te vaxxed.as i te reo Māori",
    isRTL: false,
    changeLanguage: "Huri reo",
    title: "Matawai i to NZ COVIDpass"
  },
  {
    code: Locale.nl,
    name: "Dutch",
    callToAction: "Gebruik vaxxed.as in het Dutch",
    isRTL: false,
    changeLanguage: "Taal wijzigen",
    title: "Scan je NZ COVIDpass"
  },
  {
    code: Locale.ru,
    name: "Русский",
    callToAction: "Использовать vaxxed.as на русском",
    isRTL: false,
    changeLanguage: "Изменить язык",
    title: "Отсканируйте свой NZ COVIDPass"
  },
  {
    code: Locale.sm,
    name: "Samoa",
    callToAction: "Fa'aaoga le vaxxed.as o le gagana Samoa",
    isRTL: false,
    changeLanguage: "Suia le gagana",
    title: "Va&#39;ai lau NZ COVIDpass"
  },
  {
    code: Locale["zh-cn"],
    name: "简体中文",
    callToAction: "使用 vaxxed.as 简体中文",
    isRTL: false,
    changeLanguage: "改变语言",
    title: "扫描你的新西兰 CovidPass"
  },
  {
    code: Locale["zh-hk"],
    name: "中國傳統的",
    callToAction: "在繁體中文中使用 vaxxed.as",
    isRTL: false,
    changeLanguage: "更改語言",
    title: "掃描您的 NZ COVIDpass"
  }
];

export { languageOptions };
