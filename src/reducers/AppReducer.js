import { combineReducers } from 'redux';
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import ColorReducer from './ColorReducer';
import NavReducer from './NavReducer';

const config = {
  key: 'root',
  storage
}

const AppReducer = persistCombineReducers(config,{
  color: ColorReducer,
  nav: NavReducer,
});

export default AppReducer;