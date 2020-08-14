import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES,
  CHANGE_ACTIVE_CATEGORIES,
  SET_INFO_TO_CACHE,
  SET_SEARCH_QUERY,
} from '../constants';

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const changeActiveCategories = (checkedCategories) => ({
  type: CHANGE_ACTIVE_CATEGORIES,
  payload: checkedCategories,
});

export const fetchCategoriesFailure = () => ({
  type: FETCH_CATEGORIES_FAILURE,
});

export const fetchCategoriesSuccess = (data) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: data,
});

export const setInfoToCache = (data) => ({
  type: SET_INFO_TO_CACHE,
  payload: data,
});
