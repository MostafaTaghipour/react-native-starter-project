import { Toast } from 'native-base'
import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { clearToast } from '../store/actions/uiActions'

class Toaster extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, _prevState, _snapshot) {

    const toast = this.props.toast
    if (toast === null) { return }

    if (prevProps.toast === null || toast !== prevProps.toast) {
      Toast.show(toast)
      this.props.clear()
    }
  }

  render() {
    return <View />
  }
}

function mapStateToProps(state) {
  return {
    toast: state.ui.toast,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clear: () => dispatch(clearToast()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toaster)
