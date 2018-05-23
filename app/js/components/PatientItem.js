import React from 'react';

const PatientItem = (props) => {
    return (
        <div className="patient-item">
        	<span id="loadBeds" onClick={() => console.log(props.patient)}>{props.patient.patient.display}</span>
        </div>
    )
};

export default PatientItem;