
import * as React from 'react'
import {AsyncStorage} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import { APP_LOCALE } from './configs/consts'
import { setLocale } from './locales/i18n'
import LoginScreen from './screens/auth/LoginScreen'
import { MainScreen } from './screens/main/HOME_PATH'
import configureStore from './store/reducers/index'

class LaunchScreen extends React.Component {
  constructor(props) {
    super(props)
    setLocale(APP_LOCALE)
    this.state = { loggedInStatus: 'loggedOut' }
  }

  componentDidMount() {
    AsyncStorage.getItem('loggedInStatus',
    (value) => {
      this.setState({ loggedInStatus: value })
    })

    SplashScreen.hide()
  }

  logIn = () => {
    this.setState({ loggedInStatus: 'loggedIn' })
  }

  render() {
    if (this.state.loggedInStatus === 'loggedIn') {
      return (<MainScreen/>)
    } else {
      return (<LoginScreen onLogin={this.logIn}/>)
    }
  }
}

const store = configureStore()

export const App = () => (
  <Provider store={store}>
      <LaunchScreen />
  </Provider>
)
