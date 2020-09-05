import { combineReducers } from 'redux';
import navState from './navReducer';
import productState from './productReducer';

export default combineReducers({ navState, productState });
