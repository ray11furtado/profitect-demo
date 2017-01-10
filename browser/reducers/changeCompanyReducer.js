import {
  CHANGE_COMPANY,
} from '../actions/types';

const INITIAL_STATE = { name: 'Abercrombie & Fitch' };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_COMPANY:
      return { ...state, currentCompany: action.payload };
    default: return state;
  }
}
