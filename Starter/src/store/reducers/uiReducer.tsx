
import { CLEAR_TOAST , SHOW_TOAST } from '../actions/uiActions'

const initialState = {
  toast: null,
}

export default function uiReducer(state = initialState, action: any) {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        toast: action.toast,
      }
    case CLEAR_TOAST:
      return {
        ...state,
        toast: null,
      }
    default:
      return state
  }
}
