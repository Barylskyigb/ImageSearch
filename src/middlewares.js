import imageSearch from "react-native-google-image-search";
import SEARCH_REQUEST from "./actions";

export default store => dispatch => action => {
  const composeAction = (action, data) => {
    return Object.assign(action, data);
  };

  if (!action.api || !action.type === SEARCH_REQUEST) {
    return dispatch(action);
  }

  dispatch(composeAction(action, { resolved: false, loading: true }));

  return searchRequest(action.searchTerm).then(images => {
    return dispatch(
      composeAction(action, { resolved: true, loading: false, images })
    );
  });
};

function searchRequest(searchTerm) {
  return imageSearch(searchTerm).then(images => {
    return images.map(image => image.link);
  });
}
