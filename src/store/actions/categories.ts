import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES,
  CHANGE_ACTIVE_CATEGORIES,
} from '../constants';

const changeActiveCategories = (checkedCategories) => ({
  type: CHANGE_ACTIVE_CATEGORIES,
  payload: checkedCategories,
});

const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

const fetchCategoriesFailure = () => ({
  type: FETCH_CATEGORIES_FAILURE,
});

const fetchCategoriesSuccess = (data) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: data,
});

export default {
  fetchCategories,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  changeActiveCategories,
};
