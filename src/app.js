import React from "react";
import { AppRegistry, AsyncStorage } from "react-native";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import middlewares from "./middlewares";
import thunk from "redux-thunk";
import Config from "react-native-config";
import { persistStore, autoRehydrate } from "redux-persist";

import AppReducer from "./reducers";
import AppWithNavigationState from "./screens/navigator";

class App extends React.Component {
  store = createStore(
    AppReducer,
    compose(applyMiddleware(thunk, middlewares), autoRehydrate())
  );

  constructor(props) {
    super(props);
    persistStore(this.store, { storage: AsyncStorage });
  }

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("SearchImages", () => App);

export default App;
