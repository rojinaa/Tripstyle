import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
// cart
// favorites

// import { users } from './users.reducer';

const rootReducer = combineReducers({
  authentication,
  alert
});

export default rootReducer;