import { FETCH_EMERGENCY_BEDS, RECEIVED_EMERGENCY_BEDS } from "../actions/Beds"

function beds(state = {}, action) {
  switch (action.type) {
    case FETCH_EMERGENCY_BEDS: {
      return state
    }
    case RECEIVED_EMERGENCY_BEDS: {
      return action.payload
    }
    default:
      return state
  }
}

export { beds }
