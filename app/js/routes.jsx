/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react'
import App from "./containers/App"
import Search from "./containers/Search"
import Beds from "./containers/Beds"
import {Route} from 'react-router'

export default (store) => {
  // combine store and onEnter if you need to fire an action when going to a route. Example:
  //   onEnter={ (nextState) => {store.dispatch(loadPatientAction(nextState.params.patientUuid)} }

  return (
    <Route path="/" component={App}>
    	<Route path="search" component={Search}/>
    </Route>
  )
}
