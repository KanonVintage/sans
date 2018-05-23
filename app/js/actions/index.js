import request from 'superagent';
import apiCall from "../utilities/apiHelper"
import { ENCOUNTER_TYPE_UUID } from "../utilities/constants"
import { EMERGENCY_AREA_UUID } from "../utilities/constants"

//gifs easteregg
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const REQUEST_GIFS = 'REQUEST_GIFS';
const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';

//beds
export const FETCH_EMERGENCY_BEDS = 'FETCH_EMERGENCY_BEDS';
export const FETCH_ACTIVE_VISITS = 'FETCH_ACTIVE_VISITS';

//load beds section
export function receivedEmergencyBeds(cama = {}) {
  return {
    type: FETCH_EMERGENCY_BEDS,
    payload: cama
  }
}
export function fetchEmergencyBeds() {
  return (dispatch) => {
    try {
      apiCall(null, "get", `/admissionLocation/${EMERGENCY_AREA_UUID}?v=full`).then((result) => {
        dispatch(receivedEmergencyBeds(result))
      })
    } catch (e) {
      console.error("Something weird happened in Beds.js...", e)
    }
  }
}

//load patients section
export function receivedActiveVisits(visits = {}) {
  return {
    type: FETCH_ACTIVE_VISITS,
    payload: visits
  }
}
export function fetchActiveVisits(input) {
  return (dispatch) => {
    try {
      apiCall(null, "get", "/visit?v=default")
      .then((visits) => {
        if (visits.results && Array.isArray(visits.results) && visits.results.length > 0) {
          visits.results = visits.results.filter(visit => visit.stopDatetime == null)
          if (input) {
            visits.results = visits.results.filter(visit => (visit.patient.display.indexOf(input) !== -1 || visit.location.display.indexOf(input) !== -1 || visit.visitType.display.indexOf(input) !== -1))
          }
          //console.info("Visitas: ", visits.results)
          dispatch(receivedActiveVisits(visits))
        } else {
          dispatch(receivedActiveVisits({ results: [] }))
        }
      })
    } catch (e) {
      console.error("Something weird happened...", e)
      dispatch(receivedActiveVisits({ results: [] }))
    }
  }
}

export function requestGifs(term = null) {
    const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`);

    return {
        type: REQUEST_GIFS,
        payload: data
    }
}

export function openModal(gif) {
    return {
        type: OPEN_MODAL,
        gif
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}
