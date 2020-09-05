import * as types from '../actions/actionTypes';

interface ListState {
  list?: any[];
  error?: any;
  isLoaded?: boolean;
}
const initState: ListState = {
  list: [],
  error: null,
  isLoaded: false,
};

const listProduct = (state: ListState = initState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case types.SENDING_REQUEST: {
      return {
        ...state,
        isLoaded: action.payload.isLoaded,
      };
    }
    case types.REQUEST_DATA: {
      return {
        ...state,
        list: action.payload.list,
        isLoaded: action.payload.isLoaded,
      };
    }
    case types.REQUEST_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        isLoaded: action.payload.isLoaded,
      };
    }
    default:
      return state;
  }
};

export default listProduct;
