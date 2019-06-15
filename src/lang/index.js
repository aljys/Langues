import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import en from 'iview/dist/locale/en-US';
import zh from 'iview/dist/locale/zh-CN';
import enLocale from './en'
import zhLocale from './zh'
Vue.use(VueI18n)
const messages = {
    en:{
        ...en,
        ...enLocale
    },
    zh: { ...zh,
        ...zhLocale}
};

const i18n = new VueI18n({
    locale: Cookies.get('language') || 'zh',
    messages
  })


export default i18n