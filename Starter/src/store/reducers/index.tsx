import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import movieReducer from './movieReducer'
import uiReducer from './uiReducer'

const allReducers= combineReducers({
  movie: movieReducer,
  ui: uiReducer,
})

export default function configureStore() {
  const store = createStore(allReducers, applyMiddleware(thunk))
  return store
}
