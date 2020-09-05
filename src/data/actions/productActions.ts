import * as types from './actionTypes';
import { DispatchObject } from '../../util/types';
import get from 'lodash/get';
import axios from 'axios';

export const sending_request = (): DispatchObject => ({
  type: types.SENDING_REQUEST,
  payload: {
    isLoaded: false,
  },
});

export const request_data = (data: any): DispatchObject => {
  console.log(data, 'desde request data');
  return {
    type: types.REQUEST_DATA,
    payload: {
      list: get(data, 'data.phones', []),
      isLoaded: true,
    },
  };
};

export const request_error = (data: any): DispatchObject => ({
  type: types.REQUEST_ERROR,
  payload: {
    list: data.list,
    error: data.error,
    isLoaded: true,
  },
});

export const getProductList = (): any => {
  return axios
    .get('http://localhost:3000/phones')
    .then((res) => ({ ...res }))
    .catch((error) => error);
};

export const fetchData = () => (dispatch: any) => {
  dispatch(sending_request());
  return getProductList()
    .then((data: any) => {
      dispatch(request_data(data));
    })
    .catch((error: any) => {
      dispatch(request_error(error));
    });
};
