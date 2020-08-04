import { combineReducers } from 'redux';
import pokes from './pokes';
import categories from './categories';

export default combineReducers({
  pokes,
  categories,
});
