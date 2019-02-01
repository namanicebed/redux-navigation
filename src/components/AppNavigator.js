import React from "react";
import { createStackNavigator } from "react-navigation";
import { createStore, combineReducers } from "redux";
import { connect } from "react-redux";
import MainPage from "./MainPage";
import ChooseColorPage from "./ChooseColorPage";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from "react-navigation-redux-helpers";



const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const AppNavigator = createStackNavigator(
  {
    Main: { screen: MainPage },
    ChooseColor: { screen: ChooseColorPage }
  },
  {
    initialRouteName: "Main"
  }
);

const AppWithNavigationState = reduxifyNavigator(AppNavigator,"root");
const mapStateToProps = state => ({
  state: state.nav
});
//export default connect(mapStateToProps)(App);
const RootNavigator = connect(mapStateToProps)(AppWithNavigationState);
export {RootNavigator,middleware,AppNavigator};