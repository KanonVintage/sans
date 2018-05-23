import React from 'react';
import PatientItem from './PatientItem';

const PatientList = (props) => {
    const patientItems = props.patients.map((patient) => {
        return <PatientItem key={patient.uuid} patient={patient} />
    });

    return (
        <div className="patient-list">{patientItems}</div>
    );
};

export default PatientList;
