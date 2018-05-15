import apiCall from "../utilities/apiHelper"
import { EMERGENCY_AREA_UUID } from "../utilities/constants"

export const FETCH_EMERCENGY_BEDS = "FETCH_EMERGENCY_BEDS"
export const RECEIVED_EMERGENCY_BEDS = "RECEIVED_EMERGENCY_BEDS"

export function receivedEmergencyBeds(beds = {}) {
  return {
    type: RECEIVED_EMERGENCY_BEDS,
    payload: beds
  }
}
export function fetchEmergencyBeds() {
  return (dispatch) => {
    try {
      apiCall(null, "get", `/admissionLocation/${EMERGENCY_AREA_UUID}?v=full`).then((result) => {
      	console.info("resultadobakan: ", result)
        dispatch(receivedEmergencyBeds(result))
      }, (error) => {
        console.error("Something happened...", error)
      })
    } catch (e) {
      console.error("Something weird happened in Beds.js...", e)
    }
  }
}

///admissionLocation/${EMERGENCY_AREA_UUID}?v=full