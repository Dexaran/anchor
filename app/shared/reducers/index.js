// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import accounts from './accounts';
import balances from './balances';
import keys from './keys';
import globals from './globals';
import producers from './producers';
import settings from './settings';
import validate from './validate';
import wallet from './wallet';

const rootReducer = combineReducers({
  accounts,
  balances,
  globals,
  keys,
  producers,
  router,
  settings,
  validate,
  wallet
});

export default rootReducer;
