import { combineReducers } from "redux";
import { NavigationActions } from "react-navigation";
import { AppNavigator } from "./screens/navigator";
import { SEARCH_REQUEST } from "./actions.js";

// Start with Search screen
const firstAction = AppNavigator.router.getActionForPathAndParams("Search");
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

function nav(state = initialNavState, action) {
  let nextState;

  switch (action.type) {
    case "Images":
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Images" }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}

function search(state = {}, action) {
  let nextState;

  switch (action.type) {
    case SEARCH_REQUEST:
      if (action.resolved && !action.loading) {
        nextState = { images: action.images };
      }

      break;
  }

  return nextState || state;
}

const AppReducer = combineReducers({
  nav,
  search
});

export default AppReducer;
