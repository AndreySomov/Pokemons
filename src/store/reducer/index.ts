import initialStore from '../initialStore';

import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  CHANGE_ACTIVE_CATEGORIES,
  SET_POKE_TO_CACHE,
} from '../constants';

export default (state = initialStore, action) => {
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

    case SET_POKE_TO_CACHE:
      return {
        ...state,
        pokesCache: Object.assign(state.pokesCache, { [action.payload.name]: action.payload.data }),
      };

    default:
      return state;
  }
};
