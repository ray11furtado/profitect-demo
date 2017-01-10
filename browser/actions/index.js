import {
  CHANGE_COMPANY,
} from './types';

function changeCompany(company) {
  return (dispatch) => {
    dispatch({ type: CHANGE_COMPANY, payload: company });
  };
}

export default {
  changeCompany,
};
