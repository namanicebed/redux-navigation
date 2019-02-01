import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { SafeAreaView } from "react-navigation";
import { RootNavigator } from "./src/components/AppNavigator";
import configureStore from "./src/reducers/CreateStore";
import { PersistGate } from "redux-persist/es/integration/react";

const { store, persistor } = configureStore();

class ReduxExampleApp extends React.Component {
  // store = createStore(AppReducer);

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaView style={{flex:1,backgroundColor: '#000',}}>
            <RootNavigator />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }
}

AppRegistry.registerComponent("redux-navigation", () => ReduxExampleApp);

export default ReduxExampleApp;
