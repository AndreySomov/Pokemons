import initialStore from '../initialStore';

import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  CHANGE_ACTIVE_CATEGORIES,
} from '../constants';

export default (state = initialStore.categories, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_CATEGORIES:
      return {
        ...state,
        activeCategories: action.payload,
      };

    case FETCH_CATEGORIES:
      return {
        ...state,
      };

    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
      };

    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
