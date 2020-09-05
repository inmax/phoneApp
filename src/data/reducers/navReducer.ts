import * as types from '../actions/actionTypes';

interface StateNav {
  title: string;
}
const initState: StateNav = {
  title: 'título',
};

const navState = (state: StateNav = initState, action: { type: string; payload?: any }) => {
  console.log(action, state);
  return state;
};
export default navState;
