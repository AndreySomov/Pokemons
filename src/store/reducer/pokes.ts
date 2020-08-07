import initialStore from '../initialStore';
import {
  FETCH_POKES,
  FETCH_POKES_FAILURE,
  FETCH_POKES_SUCCESS,
  FETCH_BASE_POKES_LIST,
  FETCH_BASE_POKES_LIST_FAILURE,
  FETCH_BASE_POKES_LIST_SUCCESS,
} from '../constants';

export default (state = initialStore.pokes, action) => {
  switch (action.type) {
    case FETCH_BASE_POKES_LIST:
      return {
        ...state,
        isLoadingList: true,
      };

    case FETCH_BASE_POKES_LIST_FAILURE:
      return {
        ...state,
        isLoadingList: false,
      };

    case FETCH_BASE_POKES_LIST_SUCCESS:
      return {
        ...state,
        isLoadingList: false,
        pokesList: action.payload,
      };

    case FETCH_POKES:
      return {
        ...state,
        isLoadingData: true,
      };

    case FETCH_POKES_FAILURE:
      return {
        ...state,
        isLoadingData: false,
      };

    case FETCH_POKES_SUCCESS:
      return {
        ...state,
        isLoadingData: false,
        pokesData: state.pokesData.concat(action.payload),
      };

    default:
      return state;
  }
};
