// Reducers
import RootReducer from './AppReducer'
// import ReduxThunk from 'redux-thunk'
// Redux
import { createStore, applyMiddleware } from 'redux'
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'
// Redux Middlewares
// import logger from 'redux-logger'
import {middleware} from '../components/AppNavigator'
// Redux Persist
import { persistStore } from 'redux-persist'

//const middleware = applyMiddleware(ReduxThunk)



export default function configureStore() {
  let store = createStore(RootReducer,applyMiddleware(middleware))
  let persistor = persistStore(store)
  return { persistor, store }
}
