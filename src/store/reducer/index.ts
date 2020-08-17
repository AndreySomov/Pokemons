import initialStore from '../initialStore';

import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  CHANGE_ACTIVE_CATEGORIES,
  SET_INFO_TO_CACHE,
  SET_SEARCH_QUERY,
} from '../constants';

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };

    case CHANGE_ACTIVE_CATEGORIES:
      return {
        ...state,
        activeCategories: action.payload,
      };

    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
      };

    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoadingList: false,
        data: action.payload,
      };

    case SET_INFO_TO_CACHE:
      return {
        ...state,
        cache: {
          ...state.cache,
          [action.payload.url]: action.payload.data,
        },
      };

    default:
      return state;
  }
};

export default reducer;