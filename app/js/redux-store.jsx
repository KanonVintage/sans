/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
//combineReducers
import {createStore, applyMiddleware, compose} from 'redux'
import logger from "redux-logger"
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
//import * as reducers from './reducers'
import rootReducer from "./reducers"

const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const enhancer = composeEnhancers(
applyMiddleware(
        thunkMiddleware,
  // logger,
        promiseMiddleware(),
),
)

export default function () {
  const initialState = {
    obs: [],
    visits: [],
    //patientSelected: {},
    visitSelected: {},
    sidebar: true,
    sidebarOption: 1,
    location: {},
    form: {},
    encounterType: {},
    beds: {},
    //patient: {},
    provider: "nurse",
    errors: {
      obs: false,
    },
    fetching_obs: false,
    session: {},
  }
  const store = createStore(rootReducer, initialState, enhancer)

  /*const reducer = combineReducers(reducers);
  const store = createStore(reducer, {}, applyMiddleware(
    thunkMiddleware,
    promiseMiddleware()
  ));*/
  return store;
}
