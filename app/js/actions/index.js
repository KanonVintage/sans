import request from 'superagent';
import apiCall from "../utilities/apiHelper"
import { compose } from 'redux';
import { ENCOUNTER_TYPE_UUID } from "../utilities/constants"
import { EMERGENCY_AREA_UUID } from "../utilities/constants"
import axios from 'axios';

//gifs easteregg
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const REQUEST_GIFS = 'REQUEST_GIFS';
const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';

//beds, patients, pacman in that same order
export const FETCH_EMERGENCY_BEDS = 'FETCH_EMERGENCY_BEDS';
export const FETCH_ACTIVE_VISITS = 'FETCH_ACTIVE_VISITS';
export const FETCH_INIT_DATA = 'FETCH_INIT_DATA';
export const OPEN_PACMAN = 'OPEN_PACMAN';
export const PACMAN_SET = 'PACMAN_SET';


//these merges the functionality of the fetch functions bellow
export function receivedInitialData(patients,beds) {
  return {
    type: FETCH_INIT_DATA,
    payload: {patients, beds}
  }
}
export function fetchInitialData(input) {
  return (dispatch) => {
    try {
      apiCall(null, "get", "/visit?v=default").then((visits) => {
        if (visits.results && Array.isArray(visits.results) && visits.results.length > 0) {
          visits.results = visits.results.filter(visit => visit.stopDatetime == null)
          if (input) {
            visits.results = visits.results.filter(visit => (visit.patient.display.indexOf(input) !== -1 || visit.location.display.indexOf(input) !== -1 || visit.visitType.display.indexOf(input) !== -1))
          }
          visits.results.forEach(function(visit){
            visit.bed=0;
            visit.bedId=null
          })
          /*now you've succesfully fetched them patients, now lets fetch beds*/
          try {
            apiCall(null, "get", `/admissionLocation/${EMERGENCY_AREA_UUID}?v=full`).then((result) => {
              result.bedLayouts.forEach(function(bed){
                if(bed.patient!=null){
                  let flag=0;
                  visits.results.forEach(function(visit){
                    if(bed.patient.uuid==visit.patient.uuid){
                      visit.bed=bed.bedNumber;
                      visit.bedId=bed.bedId
                      flag++;
                      //console.log(patient.patient)
                      //patient=null;
                    }
                  })
                  if(flag==0){
                    //console.log(bed)
                    try {
                      apiCall(null, "delete", `beds/`+bed.bedId+`?patientUuid=`+bed.patient.uuid).then((result) => {
                        console.log(result)
                        dispatch(responsePacman(result))
                        window.location.reload();
                      })  
                    } catch (e) {
                      console.error("Something weird happened in deleting the assignment.js...", e)
                    }
                  }
                }
                  /*visits.results.forEach(function(visit){
                    if(bed.patient.uuid)
                  })*/
              })
              //console.log(visits)
              dispatch(receivedInitialData(visits,result))
            })
          } catch (e) {
            console.error("Something weird happened in fetching beds...", e)
          }
        } else {
          dispatch(receivedInitialData({ results: [] }))
        }
      })
    } catch (e) {
      console.error("Something weird happened fetching patients...", e)
      dispatch(receivedInitialData({ results: [] }))
    }
  }
}

//load beds section
export function receivedEmergencyBeds(cama = {}) {
  return {
    type: FETCH_EMERGENCY_BEDS,
    payload: cama
  }
}
export function fetchEmergencyBeds() {
  console.log("patients:",patients)
  return (dispatch) => {
    try {
      apiCall(null, "get", `/admissionLocation/${EMERGENCY_AREA_UUID}?v=full`).then((result) => {
        result.bedLayouts.forEach(function(bed){
          if(bed.patient!=null){
            console.log(bed.patient)
            try {
              apiCall(null, "get", `patient/`+bed.patient.uuid+`/`).then((result) => {
                console.log("resultadito:",result)
              })
            } catch (e) {
              console.error("Something weird happened in Beds.js...", e)
            }
          }
        })
        dispatch(receivedEmergencyBeds(result))
      })
    } catch (e) {
      console.error("Something weird happened in fetchingEmergencyBeds.js...", e)
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
        //console.log(visits)
        if (visits.results && Array.isArray(visits.results) && visits.results.length > 0) {
          visits.results = visits.results.filter(visit => visit.stopDatetime == null)
          if (input) {
            visits.results = visits.results.filter(visit => (visit.patient.display.indexOf(input) !== -1 || visit.location.display.indexOf(input) !== -1 || visit.visitType.display.indexOf(input) !== -1))
          }
          //console.info(visits)
          dispatch(receivedActiveVisits(visits))
        } else {
          dispatch(receivedActiveVisits({ results: [] }))
        }
      })
    } catch (e) {
      console.error("Something weird happened fetching patients...", e)
      dispatch(receivedActiveVisits({ results: [] }))
    }
  }
}

export function responsePacman(data) {
  return {
    type: PACMAN_SET,
    data
  }
}
export function setPacman(sourceId, targetId){
  const v ={}
  v.patientUuid = sourceId.patient.uuid
  v.encounterUuid = sourceId.encounters[0].uuid

  return (dispatch) => {
    if(targetId.patient==null){
      try {
        apiCall(v, "post", `beds/`+targetId.bedId+`/`).then((result) => {
          //console.log(result)
          dispatch(responsePacman(result))
          window.location.reload();
        })
      } catch (e) {
        console.error("Something weird happened in Beds.js...", e)
      }
    }else{
      return{
        type: PACMAN_SET,
        bed
      }
    }
  }
}
export function deletePacman(targetId){
  const v ={}
  v.patientUuid = targetId.patient.uuid
  v.bedId = targetId.bedId

  console.log(v)
  console.log(targetId.bedId)
  return (dispatch) => {
    try {
      apiCall(v, "delete", `beds/`+targetId.bedId+`?patientUuid=`+targetId.patient.uuid).then((result) => {
        console.log(result)
        dispatch(responsePacman(result))
        window.location.reload();
      })  
    } catch (e) {
      console.error("Something weird happened in deleting the assignment.js...", e)
    }
  }
}

export function deleteVisit(targetId){
  console.log(targetId)
  return (dispatch) => {
    apiCall(null, "delete", `visit/`+targetId.uuid+`/`).then((result) => {
      if(targetId==null){
        deletePacman(targetId);
      }else{
        window.location.reload();
      }
    })
  }
}

//obtener los gifs, no voy a borrar esto pls.
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

export function openPacman(ids) {
  return {
      type: OPEN_PACMAN,
      payload: ids
  }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}
