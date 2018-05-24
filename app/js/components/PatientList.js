import React from 'react';
import PatientItem from './PatientItem';

const PatientList = (props) => {
    const patientItems = props.patients.map((visit) => {
    	//console.log(visit.patient)
        return <PatientItem key={visit.uuid} patient={visit} />
    });

    return (
        <div className="patient-list">
        	<table className="table table-bordered table-hover">
          	</table>
          	<div className="bed-list gif-list bed-layout-row">
        		{patientItems}
      		</div>
        </div>
    );
};

export default PatientList;

/*<div className="patient-list">{patientItems}</div>
<thead>
<tr>
	<th>
		Nombre del Paciente
</th>
	<th>
		Lugar de Visita
</th>
	<th>
		Tipo de Visita
</th>
	<th>
		Fecha de Visita
</th>
</tr>
</thead>
*/