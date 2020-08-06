import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES,
  CHANGE_ACTIVE_CATEGORIES,
  SET_POKE_TO_CACHE,
} from '../constants';

export const changeActiveCategories = (checkedCategories) => ({
  type: CHANGE_ACTIVE_CATEGORIES,
  payload: checkedCategories,
});

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const fetchCategoriesFailure = () => ({
  type: FETCH_CATEGORIES_FAILURE,
});

export const fetchCategoriesSuccess = (data) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: data,
});

export const setPokeToCache = (data) => {
  console.log(data);
  return ({
    type: SET_POKE_TO_CACHE,
    payload: data,
  });
};
