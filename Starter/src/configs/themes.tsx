import getTheme from '../../native-base-theme/components'
import platform from '../../native-base-theme/variables/customPlatform'
import material from '../../native-base-theme/variables/customMaterial'

const getMaterialTheme = () => {
  return getTheme(material)
}

const getPlatformTheme = () => {
  return getTheme(platform)
}

export const getAppTheme = () => {
  return APP_THEME
}
