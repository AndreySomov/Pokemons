import {
  FETCH_POKES,
  FETCH_POKES_FAILURE,
  FETCH_POKES_SUCCESS,
  FETCH_BASE_POKES_LIST_SUCCESS,
  FETCH_BASE_POKES_LIST_FAILURE,
  FETCH_BASE_POKES_LIST,
} from '../constants';

const fetchBasePokesList = () => ({
  type: FETCH_BASE_POKES_LIST,
});

const fetchBasePokesListFailure = (data) => ({
  type: FETCH_BASE_POKES_LIST_FAILURE,
  payload: data,
});

const fetchBasePokesListSuccess = (data) => ({
  type: FETCH_BASE_POKES_LIST_SUCCESS,
  payload: data,
});

const fetchPokes = () => ({
  type: FETCH_POKES,
});

const fetchPokesFailure = (data) => ({
  type: FETCH_POKES_FAILURE,
  payload: data,
});

const fetchPokesSuccess = (data) => ({
  type: FETCH_POKES_SUCCESS,
  payload: data,
});

export default {
  fetchPokes,
  fetchPokesFailure,
  fetchPokesSuccess,
  fetchBasePokesList,
  fetchBasePokesListFailure,
  fetchBasePokesListSuccess,
};
