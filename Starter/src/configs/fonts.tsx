
import { APP_LOCALE } from './consts'
import { Platform } from 'react-native';

const FONT = {
  THIN:  APP_LOCALE === 'fa' ? 'Vazir-Thin-FD' : (Platform.OS === "ios" ? "System" : "Roboto" ),
  LIGHT: APP_LOCALE === 'fa' ? 'Vazir-Light-FD' :  (Platform.OS === "ios" ? "System" : "Roboto" ),
  REGULAR:  APP_LOCALE === 'fa' ? 'Vazir-FD' : (Platform.OS === "ios" ? "System" : "Roboto" ),
  MEDIUM:  APP_LOCALE === 'fa' ? 'Vazir-Medium-FD' : (Platform.OS === "ios" ? "System" : "Roboto_medium" ),
  BOLD:   APP_LOCALE === 'fa' ? 'Vazir-Bold-FD' : (Platform.OS === "ios" ? "System" : "Roboto_medium" ),

  //
  DEFAULT_FONT :  Platform.OS === "ios" ? ((APP_LOCALE === 'fa') ? 'Vazir-FD' : "System") : ((APP_LOCALE === 'fa') ? 'Vazir-Medium-FD' : "Roboto_medium")
}

export default FONT
