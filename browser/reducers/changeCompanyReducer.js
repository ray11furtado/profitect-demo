import {
  CHANGE_COMPANY,
  GET_COMPANY_DATA,
} from '../actions/types';

const INITIAL_STATE = { name: 'Abercrombie & Fitch', data: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_COMPANY:
      return { ...state, name: action.payload };
    case GET_COMPANY_DATA:
      return { ...state, data: action.payload };
    default: return state;
  }
}
