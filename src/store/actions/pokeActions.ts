import { FETCH_POKES, FETCH_POKES_FAILURE, FETCH_POKES_SUCCESS } from '../constants';

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
};
