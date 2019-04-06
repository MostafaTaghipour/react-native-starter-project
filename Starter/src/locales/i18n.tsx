import ReactNative from 'react-native'
import I18n from 'react-native-i18n'
import moment from 'moment-jalaali'

// Import all locales
import * as en from './en.json'
import * as fa from './fa.json'

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true

// Define the supported translations
I18n.translations = {
  en,
  fa
}

// Is it a RTL language?
export const isRTL = ReactNative.I18nManager.isRTL


export function isLocaleRTL(locale) {
  return (
    locale.indexOf('he') === 0 ||
    locale.indexOf('ar') === 0 ||
    locale.indexOf('fa') === 0
  )
};

export function getCurrentLocale(){
  return I18n.currentLocale()
}

//set app locale
export const setLocale = locale => {
  I18n.locale = locale

  // Allow RTL alignment in RTL languages
  ReactNative.I18nManager.forceRTL(isLocaleRTL(locale))

  // set moment locale
  if (locale==='fa'){
    moment.loadPersian({ dialect: 'persian-modern' })
  }
  else{
    moment.locale('en')
  }
}

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params)
}

export default I18n
