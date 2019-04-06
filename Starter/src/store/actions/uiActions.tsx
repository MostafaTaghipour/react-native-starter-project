import { RnTextStyleProp, RnViewStyleProp } from 'native-base'

export const SHOW_TOAST = 'SHOW_TOAST'
export const CLEAR_TOAST = 'CLEAR_TOAST'

interface ToastConfiguration {
  text: string
  buttonText?: string
  position?: 'top' | 'bottom' | 'center'
  type?: 'danger' | 'success' | 'warning'
  duration?: number
  onClose?: (reason: 'user' | 'timeout' | 'functionCall') => any
  textStyle?: RnTextStyleProp
  buttonTextStyle?: RnTextStyleProp
  buttonStyle?: RnViewStyleProp
}

export const showToast = (toast: ToastConfiguration) => {
  return {
    type: SHOW_TOAST,
    toast,
  }
}

export const clearToast = () => {
  return {
    type: clearToast,
  }
}
