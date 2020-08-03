import initialStore from '../initialStore';

import { FETCH_POKES, FETCH_POKES_FAILURE, FETCH_POKES_SUCCESS } from '../constants';

export default (state = initialStore.pokes, action) => {
  switch (action.type) {
    case FETCH_POKES:
      console.log(action);
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_POKES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case FETCH_POKES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: state.data.concat(action.payload),
      };

    default:
      return state;
  }
};
