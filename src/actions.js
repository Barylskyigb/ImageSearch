export const SEARCH_REQUEST = "SEARCH_REQUEST";

searchAction = searchTerm => ({
  type: SEARCH_REQUEST,
  searchTerm: searchTerm,
  api: true
});

export const loadImages = (searchTerm = "") => (dispatch, getState) => {
  return dispatch(searchAction(searchTerm));
};
