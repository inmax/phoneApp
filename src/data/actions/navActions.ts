import * as types from './actionTypes';
import { DispatchObject } from '../../util/types';

export const nav_click = (data: { title: string }): DispatchObject => ({
  type: types.NAV_CLICK,
  payload: {
    title: data.title,
  },
});
