import { BackHandler, Platform } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import { NavigationActions } from "react-navigation";

import SearchScreen from "./search/search.screen";
import ImagesScreen from "./images/images.screen";

export const AppNavigator = StackNavigator({
  Search: { screen: SearchScreen },
  Images: { screen: ImagesScreen }
});

class AppWithNavigationState extends React.Component {
  constructor(props) {
    super(props);

    if (Platform.OS == "android") {
      BackHandler.addEventListener("hardwareBackPress", () => {
        props.dispatch(NavigationActions.back());
        return true;
      });
    }
  }

  render() {
    let { dispatch, nav } = this.props;

    return (
      <AppNavigator
        navigation={addNavigationHelpers({ dispatch, state: nav })}
      />
    );
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
