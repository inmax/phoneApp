import { combineReducers } from 'redux';
import navReducer from './navReducer';
import productReducer from './productReducer';

export default combineReducers({ navReducer, productReducer });
