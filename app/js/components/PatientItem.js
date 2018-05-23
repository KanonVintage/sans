import React from 'react';
import Moment from "moment"

const PatientItem = (props) => {
	let patient = props.patient.patient.display
    let date = new Date(props.patient.startDatetime)
    date = Moment(date)
    date.locale("es")
    {/*se puede agregar :ss*/}
    date = date.format("dddd, MMMM Do YYYY, h:mm a")
    try {
      patient = props.patient.patient.display.split("-")[1]
    } catch (e) {
      console.error("Cannot change the display from patient. ", patient)
    }
    return (
    	<tr onClick={() => console.log(props.patient.patient)}>
          	<td className="info">
            	{ patient }
          	</td>
          	<td className="info">
            	{ props.patient.location.display }
          	</td>
          	<td className="info">
            	{ props.patient.visitType.display }
          	</td>
          	<td className="info">
            	{ date }
          	</td>
        </tr>
    )
};

export default PatientItem;
/*<div className="patient-item">
	<span id="loadBeds" onClick={() => console.log(props.patient)}>{props.patient.patient.display}</span>
</div>*/