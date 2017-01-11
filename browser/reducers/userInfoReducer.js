import {
  CREATE_USER,
  LOGIN_USER,
} from '../actions/types';

const INITIAL_STATE = { email: undefined, data: undefined };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, email: action.payload.email, data: action.payload };
    case LOGIN_USER:
      return { ...state, email: action.payload, data: action.payload };
    default: return state;
  }
}
