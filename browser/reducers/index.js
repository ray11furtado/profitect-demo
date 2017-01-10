import { combineReducers } from 'redux';
import currentCompany from './changeCompanyReducer';

const rootReducer = combineReducers({
  currentCompany,
});

export default rootReducer;
